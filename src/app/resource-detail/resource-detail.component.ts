import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {

  languageId: number | null = null;
  languageDetails: any = null; // Initialize as null to handle non-loaded state

  studyMaterials = [
    {
      id: 1,
      language: 'JavaScript',
      description: 'A powerful programming language for web development.',
      resources: [
        { title: 'JavaScript Basics', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction' },
        { title: 'Eloquent JavaScript Book', link: 'https://eloquentjavascript.net/' },
        { title: 'JavaScript Info', link: 'https://javascript.info/' }
      ]
    },
    {
      id: 2,
      language: 'Python',
      description: 'A versatile programming language for data science, web development, and more.',
      resources: [
        { title: 'Python Official Docs', link: 'https://docs.python.org/3/' },
        { title: 'Automate the Boring Stuff with Python', link: 'https://automatetheboringstuff.com/' },
        { title: 'Python for Data Science', link: 'https://www.datacamp.com/courses/intro-to-python-for-data-science' }
      ]
    },
    {
      id: 3,
      language: 'Java',
      description: 'A popular language for building enterprise-level applications.',
      resources: [
        { title: 'Java Tutorials', link: 'https://www.oracle.com/java/technologies/javase/tutorial/' },
        { title: 'Head First Java', link: 'https://www.oreilly.com/library/view/head-first-java/0596009208/' },
        { title: 'Java Programming on Coursera', link: 'https://www.coursera.org/courses?query=java' }
      ]
    },
    {
      id: 4,
      language: 'C++',
      description: 'A powerful, high-performance language used for systems and application development.',
      resources: [
        { title: 'C++ Documentation', link: 'https://en.cppreference.com/w/' },
        { title: 'Learn C++', link: 'https://www.learncpp.com/' },
        { title: 'C++ Programming on Udemy', link: 'https://www.udemy.com/course/free-learn-c-tutorial-beginners/' }
      ]
    },
    {
      id: 5,
      language: 'Ruby',
      description: 'A dynamic, open-source language focused on simplicity and productivity.',
      resources: [
        { title: 'Ruby Official Docs', link: 'https://www.ruby-lang.org/en/documentation/' },
        { title: 'The Pragmatic Programmer', link: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer/' },
        { title: 'Ruby on Rails Guides', link: 'https://guides.rubyonrails.org/' }
      ]
    },
    {
      id: 6,
      language: 'Go',
      description: 'A statically typed, compiled language designed for simplicity and concurrency.',
      resources: [
        { title: 'Go Documentation', link: 'https://golang.org/doc/' },
        { title: 'Learn Go with Tests', link: 'https://github.com/quii/learn-go-with-tests' },
        { title: 'Go by Example', link: 'https://gobyexample.com/' }
      ]
    },
    {
      id: 7,
      language: 'Swift',
      description: 'A modern programming language developed by Apple for iOS and macOS development.',
      resources: [
        { title: 'Swift Official Docs', link: 'https://developer.apple.com/swift/' },
        { title: 'Swift Playgrounds', link: 'https://www.apple.com/swift/playgrounds/' },
        { title: 'Hacking with Swift', link: 'https://www.hackingwithswift.com/' }
      ]
    },
    {
      id: 8,
      language: 'Kotlin',
      description: 'A statically typed programming language that runs on the Java Virtual Machine (JVM).',
      resources: [
        { title: 'Kotlin Documentation', link: 'https://kotlinlang.org/docs/home.html' },
        { title: 'Kotlin for Android Developers', link: 'https://antonioleiva.com/kotlin-android-developers-book/' },
        { title: 'Kotlin Programming', link: 'https://www.udemy.com/course/kotlin-programming/' }
      ]
    },
    {
      id: 9,
      language: 'PHP',
      description: 'A widely-used open-source server-side scripting language for web development.',
      resources: [
        { title: 'PHP Manual', link: 'https://www.php.net/manual/en/' },
        { title: 'PHP The Right Way', link: 'https://phptherightway.com/' },
        { title: 'Learn PHP', link: 'https://www.learn-php.org/' }
      ]
    },
    {
      id: 10,
      language: 'Rust',
      description: 'A systems programming language focused on speed, memory safety, and concurrency.',
      resources: [
        { title: 'Rust Official Docs', link: 'https://doc.rust-lang.org/' },
        { title: 'Rust by Example', link: 'https://doc.rust-lang.org/stable/rust-by-example/' },
        { title: 'The Rust Programming Language', link: 'https://doc.rust-lang.org/book/' }
      ]
    },
    {
      id: 11,
      language: 'TypeScript',
      description: 'A statically typed superset of JavaScript that compiles to plain JavaScript.',
      resources: [
        { title: 'TypeScript Documentation', link: 'https://www.typescriptlang.org/docs/' },
        { title: 'TypeScript Deep Dive', link: 'https://basarat.gitbook.io/typescript/' },
        { title: 'Learn TypeScript', link: 'https://www.udemy.com/course/understanding-typescript/' }
      ]
    },
    {
      id: 12,
      language: 'Scala',
      description: 'A hybrid functional and object-oriented programming language that runs on the JVM.',
      resources: [
        { title: 'Scala Documentation', link: 'https://docs.scala-lang.org/' },
        { title: 'Functional Programming in Scala', link: 'https://www.manning.com/books/functional-programming-in-scala' },
        { title: 'Learn Scala', link: 'https://www.learnscala.org/' }
      ]
    },
    {
      id: 13,
      language: 'Perl',
      description: 'A high-level, general-purpose, interpreted programming language known for text processing.',
      resources: [
        { title: 'Perl Documentation', link: 'https://perldoc.perl.org/' },
        { title: 'Learn Perl', link: 'https://www.learn-perl.org/' },
        { title: 'PerlMonks', link: 'https://www.perlmonks.org/' }
      ]
    },
    {
      id: 14,
      language: 'Lua',
      description: 'A lightweight, high-level scripting language used in game development and embedded systems.',
      resources: [
        { title: 'Lua Official Docs', link: 'https://www.lua.org/manual/5.1/' },
        { title: 'Learn Lua', link: 'https://www.learn-lua.org/' },
        { title: 'Programming in Lua', link: 'https://www.lua.org/pil/' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.languageId = +id; // Convert string to number
      this.languageDetails = this.studyMaterials.find((material) => material.id === this.languageId);
    }
  }
}
