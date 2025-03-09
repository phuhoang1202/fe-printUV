import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import FilefiberLaser from '@assets/pdf/fiberLaser.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className='demoPage' ref={ref}>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  )
})

Pages.displayName = 'Pages'

function PdfFlipBook() {
  const [numPages, setNumPages] = useState()

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }
  return (
    <>
      <div className='flex justify-center p-2'>
        <HTMLFlipBook width={500} height={500}>
          {[...Array(numPages).keys()].map((pNum) => (
            <Pages key={pNum} number={pNum + 1}>
              <Document file={FilefiberLaser} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pNum} width={500} renderAnnotationLayer={false} renderTextLayer={false} />
              </Document>
              <p>
                Page {pNum} of {numPages}
              </p>
            </Pages>
          ))}
        </HTMLFlipBook>
      </div>
    </>
  )
}

export default PdfFlipBook
