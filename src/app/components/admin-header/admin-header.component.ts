import { Component, OnInit, Inject } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  data:any=[];
  constructor() { }
  // setflag(val){
  //   alert(val);
  //   let key = 'flag';
  //   //console.log('recieved= key:' + key + 'value:' + val);
  //   this.storage.set(key, val);
  //   this.data[key]= this.storage.get(key);
  //   alert(this.data[key]);
  //     };


  ngOnInit() {
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
  });
 
  $(document).ready(function () {
    $('.nav li').click(function(e) {

        $('.nav li').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
});
  }

}
