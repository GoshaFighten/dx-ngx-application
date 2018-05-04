import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    language: string;
    languages: string[];
    constructor(private localizeService: LocalizeRouterService) { }

    ngOnInit() {
        this.languages = this.localizeService.parser.locales;
        this.language = this.localizeService.parser.currentLang;
    }
    setLanguage() {
        this.localizeService.changeLanguage(this.language);
    }
}
