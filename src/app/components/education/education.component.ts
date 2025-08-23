import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

interface Education {
  degree: string;
  school: string;
  duration: string;
  year: string;
  description: string;
  gpa?: string;
  achievements?: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('slideInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out')
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {
  visible = false;
  
  educationData: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Dr. A. P. J. Abdul Kalam Technical University, Lucknow',
      duration: '2017 - 2021',
      year: '2021',
      description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and system design.',
      gpa: '8.1/10.0',
      achievements: [
        'Graduated with First Class with Distinction',
        'Contributed to open-source projects or built impactful academic projects',
        'President of Computer Science Society "PARAM"'
      ]
    }
  ];

  ngOnInit() {
    // Check if IntersectionObserver is available (browser environment)
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Use Intersection Observer to trigger animations when section is visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visible = true;
          }
        });
      }, { threshold: 0.2 });

      const element = document.getElementById('education');
      if (element) {
        observer.observe(element);
      }
    } else {
      // Fallback for server-side rendering or browsers without IntersectionObserver
      setTimeout(() => {
        this.visible = true;
      }, 500);
    }
  }
}
