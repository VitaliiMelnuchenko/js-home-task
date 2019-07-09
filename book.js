function Book(text, author, price) {
    Book.separateStr = function(str) {
        let pages = [];
        for (let i = 0; i < str.length; i = i + 200) {
            pages.push(str.substr(i, 200));
        }
        return pages;
    }
    this.text = text;
    this.author = author;
    this.price = price;
    this.pages = Book.separateStr(this.text);
    this.curPage = 0;
}

Book.prototype = {
    startReading: function() {
        return this.pages[0];
    },

    nextPage: function() {
        return this.pages[++this.curPage];
    },

    prevPage: function() {
        return this.pages[--this.curPage];
    },

    jumpTo: function(page) {
        this.curPage = page - 1;
        return this.pages[page - 1];
    },

    find: function(str) {
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i].toLowerCase().indexOf(str.toLowerCase()) >= 0) {
                return this.pages[i];
            }
        }
        return null;
    },

    continue: function() {
        return this.pages[this.curPage];
    },

    author: function() {
        return this.author;
    },

    price: function() {
        return this.price;
    }
}

let book1text = "Bacon ipsum dolor amet landjaeger chuck pork chop corned beef ribeye leberkas, chicken cupim hamburger tongue turducken capicola. Spare ribs turducken kielbasa filet mignon, pork chop jerky kevin prosciutto buffalo pork belly meatball cow ground round. Jowl chuck rump hamburger pork belly kielbasa. Hamburger shank prosciutto spare ribs, porchetta pig short ribs bresaola sirloin chuck meatloaf. Pork loin beef corned beef, meatball andouille flank ham hock beef ribs shank picanha cupim strip steak kevin tail. Rump ham hock brisket ribeye, doner short loin spare ribs burgdoggen. Kielbasa jowl ground round spare ribs, chuck buffalo meatball andouille beef ribs pig swine sirloin pork chop filet mignon. Beef fatback turducken, pork belly shank jowl t-bone sirloin ham hock. Brisket drumstick hamburger turducken, cupim sirloin ham porchetta flank pig cow t-bone andouille. Hamburger shank ham hock prosciutto pastrami chuck meatloaf frankfurter pork chop turkey cow kielbasa sausage. Frankfurter short loin brisket, ham hock pancetta capicola sausage pork chop bacon.Beef ribs venison brisket, ribeye porchetta pork belly prosciutto fatback salami. Swine beef ribs shoulder, cupim bacon tenderloin ground round ham short loin. Bacon chicken pork loin, chuck alcatra tenderloin beef ribs shankle rump t-bone andouille. Hamburger sausage leberkas, picanha capicola turducken meatloaf. Fatback chuck shankle landjaeger ground round cupim beef.Pig shoulder frankfurter, ribeye ground round pork belly turducken. Sausage meatball chuck frankfurter. Short ribs beef ribs prosciutto, bacon beef pig porchetta cow fatback kielbasa boudin. Strip steak chicken rump, bresaola pig landjaeger pastrami ball tip turkey filet mignon tenderloin pork biltong short loin. Turkey short ribs hamburger bresaola. Spare ribs landjaeger bacon swine hamburger kevin, shankle ham hock porchetta beef ribs pork belly capicola ball tip. Tail venison hamburger, tenderloin ribeye beef ribs tongue leberkas spare ribs rump sausage pancetta sirloin ball tip biltong. Cow pork chop turducken, ham corned beef pig pastrami strip steak chuck. Picanha porchetta chicken pig ground round sausage. Capicola turkey sirloin leberkas, swine prosciutto pastrami cow venison. Short loin tongue cupim bacon rump picanha sausage jowl corned beef, frankfurter short ribs venison beef ribs jerky swine.";

let book1 = new Book(book1text, "Bacon ipsum", 34.99);