export const shareOnFacebook = () => {
    const url = window.location.href;
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareURL, '_blank', 'width=600,height=400');
  };

  export const shareOnTwitter = () => {
    const twitterShareURL = `https://twitter.com/intent/tweet?text=Check out this awesome page&url=${encodeURIComponent(window.location.href)}&via=YourTwitterUsername`;
    window.open(twitterShareURL, '_blank', 'width=600,height=400');
  };
    export const shareOnInstagram = () => {
        alert('LINK COPIED, To share on Instagram, open the Instagram app and share manually.');
      const currentURL = window.location.href;
      navigator.clipboard.writeText(currentURL).then(() => {
        console.log('URL copied to clipboard');

        // You can display a success message or perform other actions here
      }).catch((error) => {
        console.error('Failed to copy URL: ', error);
        // Handle any errors that occur during copying
      });
    };
  
  

  