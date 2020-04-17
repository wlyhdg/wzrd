let houseBkgs = ["https://wallpaperset.com/w/full/5/e/2/289871.jpg#.Xo1pfC5ZTC4.link", "https://www.wallpaperflare.com/static/235/934/521/slytherin-sonserina-harry-potter-hogwarts-wallpaper-preview.jpg", "https://c4.wallpaperflare.com/wallpaper/983/804/983/harry-potter-broom-harry-potter-gryffindor-wallpaper-preview.jpg", "https://external-preview.redd.it/QOwLd5Djk9tGxA5vOlr-nh7oyChb2_7mVF0o28X6NLA.jpg?auto=webp&s=e38e868a14f5abe36bc2d5b683741d42a1c7d9a3"]
let icons = document.querySelectorAll('.icon');
let houseInfo = document.querySelectorAll('.house-desc');

icons.forEach((icon, idx) => {
  icon.addEventListener('click', () => {
    houseInfo.forEach((h, i) => {
      if(i === idx) {
        houseInfo[i].style.backgroundColor = "rgba(0,0,0,0.9)";
        houseInfo[i].style.transform = "scaleX(1.5)";
        houseInfo[i].style.padding = "10px";
        houseInfo[i].style.opacity = "1";
        document.body.style.background = "url(" + houseBkgs[i] + ") center center/cover";
        document.body.style.backgroundAttachment = "fixed";
      } else {
        houseInfo[i].style.backgroundColor = "transparent";
        houseInfo[i].style.transform = "scaleX(1)";
        houseInfo[i].style.padding = "0px";
        houseInfo[i].style.opacity = "0.25";
      }
    });
    
  })
})