import { Component, OnInit } from '@angular/core';

import { Language } from '../shared/language';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  languages: Language[];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguages().subscribe(languages => {
      this.languages = languages;
    });
  }

  deleteLanguageByIndex(index: number): void {
    if (index > -1) {
      this.languageService.deleteLanguage(this.languages[index].id).subscribe();
      this.languages.splice(index, 1);
    }
  }

}
