Link/ 
                
				https://chic-rugelach-95ed0a.netlify.app/

Tech Stack

React.js – UI development

React Router v6 – Routing & protected routes

Context API – Global state (login state + username)

CSS – Styling

src/

    App.js       : Root router + routes
    Gstate.js    : GlobalContext ( Auth state)

   pages/
   
      
	  Login.js            : Login screen
	  Dashboard.js        : Main bot performance overview
	  BotStatus.js        : List of bots & live status
	  TaskAllocation.js   : Assign tasks to bots
	  TaskQueue.js        : Queue visualization
	  Analytics.js        : Charts & metrics
	  Navbar.js           : Top navigation bar
	  
styles/
      
	  css
	  
This project uses the Context API to manage authentication state across pages.

1. Login

User enters credentials in Login.js.

On success:

setIsLoggedIn(true)

setUsername()

User is redirected to:

/app/dashboard



3. Global State

Gstate.js stores:

isLoggedIn – Boolean

username – Logged-in user’s name

All components access this data using:

const { isLoggedIn, username } = useContext(GlobalContext);



4. Protected Routes

Inside App.js:

If not logged in → Redirect to /

If logged in → Show layout + pages



5. Navbar

Uses global context to display username

Logout button sets:

setIsLoggedIn(false);

and redirects to /
