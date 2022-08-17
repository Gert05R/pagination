import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage= 0;

  images = [
  {
    title: 'Iphone 13 front',
    url: 'https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },

  {
    title: 'Iphone 13 Back',
    url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },

  {
  title: 'Iphone 13 Mini',
  url: 'https://images.unsplash.com/photo-1634618776233-2e951832a5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },

  {
  title: 'Iphone 13 Mini back',
  url: 'https://images.unsplash.com/photo-1639769167793-f046c9351f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Iphone 13 front',
    url: 'https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },

  {
    title: 'Iphone 13 Back',
    url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },

  {
  title: 'Iphone 13 Mini',
  url: 'https://images.unsplash.com/photo-1634618776233-2e951832a5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },

  {
  title: 'Iphone 13 Mini back',
  url: 'https://images.unsplash.com/photo-1639769167793-f046c9351f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Iphone 13 front',
    url: 'https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },

  {
    title: 'Iphone 13 Back',
    url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },

  {
  title: 'Iphone 13 Mini',
  url: 'https://images.unsplash.com/photo-1634618776233-2e951832a5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },

  {
  title: 'Iphone 13 Mini back',
  url: 'https://images.unsplash.com/photo-1639769167793-f046c9351f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Iphone 13 front',
    url: 'https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },

  {
    title: 'Iphone 13 Back',
    url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },

  {
  title: 'Iphone 13 Mini',
  url: 'https://images.unsplash.com/photo-1634618776233-2e951832a5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },

  {
  title: 'Iphone 13 Mini back',
  url: 'https://images.unsplash.com/photo-1639769167793-f046c9351f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Iphone 13 front',
    url: 'https://images.unsplash.com/photo-1638038772924-ef79cce2426d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },

  {
    title: 'Iphone 13 Back',
    url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },

  {
  title: 'Iphone 13 Mini',
  url: 'https://images.unsplash.com/photo-1634618776233-2e951832a5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },

  {
  title: 'Iphone 13 Mini back',
  url: 'https://images.unsplash.com/photo-1639769167793-f046c9351f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }

  ]
  
    

  checkWindowIndex(index: number) {

    return Math.abs(this.currentPage - index) <5;
    
  }
}