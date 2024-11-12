import React, { useEffect, useRef } from "react";
import "./HeroLightpass.css";

const HeroLightpass: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 148;

  // Cache to store images once loaded
  const imageCache: { [key: number]: HTMLImageElement } = {};

  const currentFrame = (index: number) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        imageCache[i] = img; // Store the image in the cache
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1158;
    canvas.height = 770;

    img.onload = () => {
      context.drawImage(img, 0, 0);
      imageCache[1] = img; // Cache the first image after loading
    };

    const updateImage = (index: number) => {
      // Check if the image is already cached
      const cachedImage = imageCache[index];
      if (cachedImage) {
        context.drawImage(cachedImage, 0, 0);
      } else {
        const newImg = new Image();
        newImg.src = currentFrame(index);
        newImg.onload = () => {
          context.drawImage(newImg, 0, 0);
          imageCache[index] = newImg; // Cache the image once loaded
        };
      }
    };

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener("scroll", handleScroll);
    preloadImages();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero-lightpass-section">
      <canvas
        ref={canvasRef}
        id="hero-lightpass"
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "50vw",
          maxHeight: "100vh",
        }}
      />
    </section>
  );
};

export default HeroLightpass;
