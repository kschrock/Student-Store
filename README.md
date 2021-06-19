
## Week 2 Assignment: Student Store

Submitted by: **Kordell Schrock**

Estimated time spent: **18** hours spent in total

Deployed Application (optional): [Student Store Deployed Site](https://codepath-student-store.surge.sh/)

### Application Features

#### CORE FEATURES

- [X] The API should contain an endpoint that serves an array of all products in the store
- [X] A Store model should handle all data management logic for the API and be the interface for read/write operations to the JSON file.
- [X] The frontend should include a landing page that displays the products available for purchase.
- [X] Each product should have an individual page that shows the details of the product.

#### STRETCH FEATURES

- [X] Deploy your website with Heroku & Surge. 
- [ ] An endpoint should exist for creating orders and saving them to a JSON file. Each order should contain the email of the person placing the order, the items associated with the order, and the quantity of each item purchased.
- [ ] There should be a `Sidebar` component that appears on every page and has two states - `open` and `closed`. When the sidebar is opened, it should display a shopping cart of all the products the user currently has in their cart. It should also calculate and display the total amount in dollars for the checked-out items. When it's closed, the sidebar should be much thinner and not display its internal content.
- [ ] A checkout form should be available that allows the user to enter their email and send their order to the API.
- [ ] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [x] Create an endpoint that serves only a single product based on the product's id
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Walkthrough Video

![](https://media.giphy.com/media/wJTe6Qe1pEK8zYnmCX/giphy.gif)
**Main Page w/ main card layout/functions**

![](https://media.giphy.com/media/f4WCOGZcMOfyMBevT6/giphy.gif)
**Shopping Cart adding Items from button click (top right corner)**

![](https://media.giphy.com/media/P4sz7AUdSYbTSIGIOg/giphy.gif)
**Showing cart**

![](https://media.giphy.com/media/7NKPN6bo7BPwEwa1eK/giphy.gif)
**Backend Logic for cart and items (GET, POST, DELETE)**


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I feel like I need to learn how to send data from child to parent. I understand how to pass data from parent to child. Otherwise, I think the topics over the week were right on point. The videos for the most part were great. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would implement the cart feature that would show items in cart and show the list of items in the cart. I would also try to improve the UI with material-ui which is another learning curve. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I thought everything went well given to learning react this week! It was like drinking from a fire house. I learned alot (React, Node Js API, Front-end, Back-end, Material UI, Heroku, Surge). The assignment was a challege and grafeful the core features were ajusted accordingly. 

One major mistake I made was trying to remove a stagged commit and I accidently resetted the HEAD of my git and lost at least a couple hours of work. 

### material-ui

- Add any links to open-source libraries used in your project.
- https://material-ui.com/

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

### Shout out to all my teammates throughout the week. It was definely a hard week. Brian helped me on Wednesday's lab when I got stuck at the end! Also, Shout out to the CodePath Team for your hard work taching us and I appreciate it!!! 