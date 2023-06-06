function adjustDiv(
  selector,
  className,
  breakpoint = 768,
  fontSizeRatio = 1,
  responsiveImages = true,
  lazyLoading = false
) {
  const element = document.querySelector(selector);
  let currentWidth = window.innerWidth;

  function setResponsiveWidth() {
    const parentWidth = element.parentElement.offsetWidth;
    const widthPercentage = (currentWidth / parentWidth) * 100;
    element.style.width = `${widthPercentage}%`;
  }

  function setResponsiveFontSize(baseFontSize) {
    const fontSize = baseFontSize * fontSizeRatio;
    element.style.fontSize = `${fontSize}px`;
  }

  function applyLazyLoading() {
    if (lazyLoading) {
      const images = element.querySelectorAll('img');
      images.forEach((image) => {
        image.setAttribute('data-src', image.getAttribute('src'));
        image.removeAttribute('src');
      });
      lazySizes.init();
    }
  }

  function animate(animation, applyToChildren) {
    const targetElements = applyToChildren ? element.querySelectorAll('*') : [element];
    targetElements.forEach((target) => {
      target.classList.add('animate__animated', animation);
    });
  }

  function handleResize() {
    const newWidth = window.innerWidth;
    if (newWidth !== currentWidth) {
      currentWidth = newWidth;
      setResponsiveWidth();
      setResponsiveFontSize(16);
      applyLazyLoading();
       // Perform animation operations
      // ...
    }
  }

  function adjustDiv() {
    setResponsiveWidth();
    setResponsiveFontSize(16);
    applyLazyLoading();
     // Perform animation operations
    // ...

    window.addEventListener('resize', handleResize);
  }

  return {
    setResponsiveWidth,
    setResponsiveFontSize,
    applyLazyLoading,
    animate,
    adjustDiv
  };
}

