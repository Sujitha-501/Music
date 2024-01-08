import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [
    { name: 'Love Is Gone - Acoustic', author: 'Dylan Matthew', image: './assets/Love_Is_Gone.png', song: './assets/Love_Is_Gone.mp3' },
    { name: 'Pehli Dafa', author: 'Atif Aslam', image: './assets/Pehli_Dafa.png', song: './assets/Pehli_Dafa.mp3' },
    { name: 'All Time Low', author: 'Jon Bellion, Stormzy', image: './assets/All_Time_Low.png', song: './assets/All_Time_Low.mp3' },
    { name: 'Weak when ur around', author: 'Blackbear', image: './assets/Blackbear.png', song: './assets/Blackbear.mp3' },
    { name: 'Channa Mereya - Unplugged', author: 'Pritam, Arijit Singh', image: './assets/Channa_Mereya.png', song: './assets/Channa_Mereya.mp3' },
    { name: 'Rock Music', author: 'Jenny Loveless', image: './assets/Guitar_music.png', song: './assets/Guitar_music.mp3' },
    { name: 'Kun Faya Kun', author: 'A.R. Rahman', image: './assets/Kun_Faya_Kun.png', song: './assets/Kun_Faya_Kun.mp3' },
    { name: 'Phone Ringtone', author: 'Louies Mathew', image: './assets/Ringtone.png', song: './assets/Ringtone.mp3' }
  ]

  play!: boolean
  value: number = 0.71;
  selectedSong = 0;
  frontAnimation = false;
  prevAnimation = false;
  audio = new Audio();

  ngOnInit(): void {
    this.audio.src = this.data[this.selectedSong]?.song;
    this.audio.load();
  }

  playNext() {
    if (this.data && this.data.length > 0) {
      this.frontAnimation = true;
      this.selectedSong = (this.selectedSong < this.data.length - 1) ? ++this.selectedSong : 0;
      this.audio.src = this.data[this.selectedSong]?.song;
      this.audio.load();
      if (this.play) {
        this.audio.play();
      }
    }
    setTimeout(() => {
      this.frontAnimation = false;
    }, 600)
  }

  playPrevious() {
    if (this.data && this.data.length > 0) {
      this.prevAnimation = true;
      this.selectedSong = (this.selectedSong < 1) ? (this.data && this.data.length - 1) : --this.selectedSong;
      this.audio.src = this.data[this.selectedSong]?.song;
      this.audio.load();
      if (this.play) {
        this.audio.play();
      }
    }
    setTimeout(() => {
      this.prevAnimation = false;
    }, 600)
  }

  togglePlay() {
    this.play = !this.play;
    if (this.play) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  volumeControl(event: any) {
    const volume = event.target.value;
    this.audio.volume = volume;
  }

}
