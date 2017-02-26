import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({ name: 'localize' })
export class LocalizeStubPipe implements PipeTransform {
    transform(value: String): String {
        return value;
    }
}

@Pipe({ name: 'translate' })
export class TranslateStubPipe implements PipeTransform {
    transform(value: String): String {
        return value;
    }
}

@Injectable()
export class LocalizeServiceStub {
    parser = {
        locales: ['en', 'de'],
        currentLang: 'en'
    };
    changeLanguage(lang: string) {
        this.parser.currentLang = lang;
    }
}
