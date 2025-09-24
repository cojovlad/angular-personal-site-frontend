import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateService, TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './taskbar.html',
  styleUrls: ['./taskbar.css']
})
export class Taskbar implements OnInit, OnDestroy {
  startImg = 'assets/img/start-icon.png';
  currentTime: string = '00:00';
  private intervalId: any;

  // language UI state
  langOpen = false;
  currentLang: 'en' | 'ro' = 'en';

  constructor(private translate: TranslateService) {
    // supported languages
    this.translate.addLangs(['en', 'ro']);
  }

  ngOnInit() {
    // initialize time
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);

    // load saved language or browser default
    const saved = localStorage.getItem('app_lang');
    const browserLang = this.translate.getBrowserLang();
    const initial = (saved as 'en' | 'ro') ?? (browserLang === 'ro' ? 'ro' : 'en');

    this.setLang(initial, {persist: false, useTranslate: true});
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateTime() {
    const now = new Date();
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    this.currentTime = `${hours}:${minutes}`;
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  // UI toggle
  toggleLangMenu() {
    this.langOpen = !this.langOpen;
  }

  // set language
  setLang(lang: 'en' | 'ro', opts: { persist?: boolean, useTranslate?: boolean } = {
    persist: true,
    useTranslate: true
  }) {
    this.currentLang = lang;
    if (opts.useTranslate !== false) {
      // tells ngx-translate to load and use language file at runtime
      this.translate.use(lang);
    }
    if (opts.persist !== false) {
      localStorage.setItem('app_lang', lang);
    }
    // close menu after selection
    this.langOpen = false;
  }
}
