(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(42)},26:function(e,t,a){e.exports=a.p+"static/media/loader.def46ae4.gif"},27:function(e,t,a){e.exports=a.p+"static/media/no-cover.22975dd1.jpg"},37:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),c=a(3),l=a(4),s=a(6),u=a(5),m=a(7),h=a(10),d="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:b},p=function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(h.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},k=function(e){return fetch("".concat(d,"/search"),{method:"POST",headers:Object(h.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=a(9),y=function(){return o.a.createElement("div",{className:"loader-gif"},o.a.createElement("img",{src:a(26),alt:"loading, please wait"}))},g=a(20),E=a(19),j=a(8),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).shelfOptions=[{key:"currentlyReading",title:"Currently Reading"},{key:"wantToRead",title:"Want to Read"},{key:"read",title:"Read"},{key:"none",title:"None"}],a.updateShelf=function(e){e.preventDefault();var t=a.props.book;t.shelf=e.target.value,a.props.moveTo(t)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.book,t=e.title,n=e.authors,r=e.imageLinks,i=e.shelf,c=r?r.thumbnail:"";return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover"},""!==c?o.a.createElement("img",{src:c,alt:t}):o.a.createElement("img",{src:a(27),alt:t})),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:i,onChange:this.updateShelf},o.a.createElement("option",{value:"disabled",disabled:!0},"Move to..."),this.shelfOptions.map(function(e){var t=e.key,a=e.title;return o.a.createElement("option",{key:t,value:t},a)})))),o.a.createElement("div",{className:"book-title"},t),o.a.createElement("div",{className:"book-authors"},n)))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.books;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},a),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},n.map(function(t){return o.a.createElement(O,{key:t.id,book:t,moveTo:e.props.moveTo})}))))}}]),t}(n.Component),T=function(){return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads"))},S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=function(e){var t=new Map;t.set("currentlyReading",{title:"Currently Reading",books:[]}),t.set("wantToRead",{title:"Want To Read",books:[]}),t.set("read",{title:"Read",books:[]});var a=!0,n=!1,o=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var c=r.value;t.get(c.shelf).books.push(c)}}catch(l){n=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return t}(this.props.books);return o.a.createElement("div",{className:"list-books"},o.a.createElement(T,null),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,Object(E.a)(t).map(function(t){var a=Object(g.a)(t,2),n=a[0],r=a[1];return o.a.createElement(N,{key:n,title:r.title,books:r.books,moveTo:e.props.moveTo})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(j.b,{to:"/search"},"Add a book")))}}]),t}(o.a.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",books:[],loading:!1},a.updateQuery=function(e){e=e.trim(),a.setState({query:e,loading:!0}),k(e).then(function(e){return e.error?[]:e.map(function(e){var t=Object(h.a)({},e),n=a.props.books.find(function(e){return e.id===t.id});return e.shelf=n?n.shelf:"none",e})}).then(function(e){a.setState(function(){return{books:e,loading:!1}})}).catch(function(){a.clearQuery()})},a.clearQuery=function(){a.setState({books:[],loading:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.books,n=t.loading,r=this.props.moveTo;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(j.b,{className:"close-search",to:"/",title:"Back","aria-label":"Back"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},n&&o.a.createElement(y,null),a.length>0?o.a.createElement("div",null,o.a.createElement("div",{className:"result"},o.a.createElement("b",null,a.length)," results found."),o.a.createElement("ol",{className:"books-grid"},a.map(function(e){return o.a.createElement(O,{key:e.id,book:e,moveTo:r})}))):o.a.createElement("div",{className:"results"},o.a.createElement("b",null,a.length)," results found.",o.a.createElement("p",null,"You can try searching for:"),o.a.createElement("p",null,"'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'"))))}}]),t}(o.a.Component),w=(a(37),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],loading:!1},a.moveTo=function(e){p(e,e.shelf).then(function(){a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id})}}),"none"!==e.shelf&&a.setState(function(t){return{books:t.books.concat([e])}})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(d,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t,loading:!0})})}},{key:"render",value:function(){var e=this;return!1===this.state.loading?o.a.createElement(y,null):o.a.createElement("div",{className:"app"},o.a.createElement(v.a,{exact:!0,path:"/",render:function(){return o.a.createElement(S,{books:e.state.books,moveTo:e.moveTo})}}),o.a.createElement(v.a,{path:"/search",render:function(){return o.a.createElement(C,{books:e.state.books,moveTo:e.moveTo})}}))}}]),t}(o.a.Component));a(40);i.a.render(o.a.createElement(j.a,null,o.a.createElement(w,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.d1487915.chunk.js.map