import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatListModule, CommonModule, NavbarComponent],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  files: File[] = [];

  onFileSelected(event: any) {
    const selectedFiles = Array.from(event.target.files) as File[];
    this.files.push(...selectedFiles);
  }

  removeFile(file: File) {
    this.files = this.files.filter(f => f !== file);
  }

  uploadFiles() {
    console.log('Arquivos enviados:', this.files);
    alert(`${this.files.length} arquivo(s) enviado(s)`);
    this.files = [];
  }
}
