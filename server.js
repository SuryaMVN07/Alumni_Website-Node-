<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In - CRRAO Alumni</title>
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
    <div class="card" style="max-width: 500px; margin: 40px auto;">
      <h2 style="justify-content: center; margin-bottom: 30px;">Welcome Back</h2>
      
      <div class="form-container">
        <form action="/login" method="POST">
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" required>
            <i class="fas fa-eye password-toggle"></i>
          </div>
          
          <button type="submit" class="btn" style="width: 100%; margin-top: 10px;"><i class="fas fa-sign-in-alt"></i> Sign In</button>
        </form>
        
        <p style="text-align: center; margin-top: 20px; font-size: 0.9rem;">
          Don't have an account? <a href="register.html" style="color: var(--accent); font-weight: 600; text-decoration: none;">Create one</a>
        </p>
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