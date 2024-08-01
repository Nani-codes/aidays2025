import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

type ImageGallery = {
  src: string
  title?:string
}[]

const ImageGallery = ({
  images
}: {
  images: ImageGallery
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const srcArr =  images.map((s)=>s.src);
  const openImageViewer = useCallback((src) => {
    const index = srcArr.indexOf(src);
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, [srcArr]);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const firstColumn = images.filter((_, index) => index % 3 === 0);
  const secondColumn = images.filter((_, index) => index % 3 === 1);
  const thirdColumn = images.filter((_, index) => index % 3 === 2);

  const cols = [firstColumn, secondColumn, thirdColumn];

  return (<div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3">

  {          cols.map((c,i) => (<div className="grid gap-4" key={i}>
              {
                  c.map(({src}) => (
                    <Image
                      key={src}
                      className='h-auto max-w-full rounded-lg'
                      src={ src }
                      onClick={ () => openImageViewer(src) }
                      width="500"
                      height="500"
                      style={{ margin: '2px' }}
                      alt=""
                    />
                  ))}

              </div>))}

              {isViewerOpen && (
                <ImageViewer
                  src={srcArr}
                  currentIndex={ currentImage }
                  disableScroll={ false }
                  closeOnClickOutside={ true }
                  onClose={ closeImageViewer }
                />
              )}
            </div>
          )

};

export default ImageGallery;
