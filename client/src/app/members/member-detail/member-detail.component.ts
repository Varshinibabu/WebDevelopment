import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit{
   member: Member |undefined;
  constructor(private memberservice:MembersService,private route:ActivatedRoute){}
  galleryoptions:NgxGalleryOptions[]=[];
  galleryimages:NgxGalleryImage[]=[];

  ngOnInit(): void {
  this.loadMember();
  this.galleryoptions=[{
    width:'500px',
    height:'500px',
    imagePercent:100,
    thumbnailsColumns:4,
    imageAnimation:NgxGalleryAnimation.Slide,
    preview:false
    }
  ]
 
  }

  getimages()
  {
    if(!this.member) return [];
    const imageUrls=[];
    for(const photo of this.member.photos)
    {
      imageUrls.push({
        small:photo.url,
        medium:photo.url,
        big:photo.url
      })
    }
    return imageUrls;
  }
  loadMember(){
    var username=this.route.snapshot.paramMap.get('username');
    if(!username) return;
    this.memberservice.getMember(username).subscribe({
      next:member=>{ this.member=member,
      this.galleryimages=this.getimages();
    }
    })
  }

}
