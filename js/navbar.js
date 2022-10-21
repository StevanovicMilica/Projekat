const createNavBar = () => {
    let navbar = document.querySelector('.navbar');
navbar.innerHTML +=`
<nav class="navbar">
<ul class="links-container">
    <li><img src="./img/Recordstore.svg" alt="Record store"></li>
    <li class="link-item"><a href="index.html" class="link active">Home</a></li>
    <li class="link-item"><a href="products.html" class="link">Products</a></li>
    <li class="link-item"><a href="login.html"  class="link">Login</a></li>
    <li class="link-item"><a href="joinUs.html" class="link">Join us!!!</a></li>
</ul>
<div class="interactions">
    <div class="cart">
        <img src="./img/images.png" class="cart-icon" alt="">
        <span class="cart-item-count">01</span>
    </div>
    </div>
</nav>
`
}
createNavBar();