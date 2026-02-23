<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Profile - CRRAO Alumni</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

  <header class="site-header">
    <div class="top-banner">
      <div class="container top-banner-container">
        <div class="banner-left">
          <a href="home.html"><img src="crraologo.jpeg" alt="CRRAO Logo" class="banner-logo"></a>
        </div>
        <div class="banner-center">
          <h1 class="institute-name">C.R.Rao Advanced Institute of Mathematics,<br>Statistics and Computer Science (AIMSCS)</h1>
          <p class="institute-address">University of Hyderabad Campus, Gachibowli, Hyderabad – 500 046</p>
        </div>
        <div class="banner-right">
          <img src="https://crraoaimscs.res.in/assets/team/CR_RAO_Profile.png" alt="Prof. C.R. Rao" class="banner-photo">
        </div>
      </div>
    </div>

    <nav class="navbar">
      <div class="container nav-container">
        <button class="mobile-toggle"><i class="fas fa-bars"></i></button>
        <ul class="nav-links">
          <li><a href="home.html">HOME</a></li>
          <li class="has-dropdown">
            <a href="#" class="active">PROFILE <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="profile.html">UPDATE PROFILE</a>
              <a href="signin.html">SIGN IN</a>
              <a href="register.html">REGISTER</a>
            </div>
          </li>
          <li><a href="events.html">EVENTS</a></li>
          <li><a href="about.html">ABOUT US</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="container">
    <div class="card" style="max-width: 650px; margin: 20px auto;">
      <h2 style="justify-content: center; margin-bottom: 30px;">Update Your Profile</h2>
      
      <div class="form-container" style="max-width: 100%;">
        <form action="/update-profile" method="POST">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="John" required>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Doe" required>
            </div>
          </div>
          
          <div class="form-group" style="margin-top: 20px;">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="john.doe@example.com" required>
          </div>

          <div class="form-group">
            <label>Current Profession / Job Title</label>
            <input type="text" name="job" placeholder="e.g. Senior Data Scientist">
          </div>
          
          <div class="form-group">
            <label>Short Bio</label>
            <textarea name="bio" rows="4" placeholder="Tell us about what you're doing now..."></textarea>
          </div>
          
          <button type="submit" class="btn" style="width: 100%; margin-top: 10px;"><i class="fas fa-save"></i> Save Changes</button>
        </form>
      </div>
    </div>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2024 CRRAO AIMSCS Alumni Platform. All rights reserved.</p>
    </div>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>