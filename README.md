# Web-Worker-Data-Processing
Sorting large size array with and without using web worker and comparing the performance.

## Project Overview

This project showcases the benefits of utilizing Web Workers for efficiently sorting large arrays. It provides a simple web interface with two primary functionalities:

- Sort Array with Web Worker
- Sort Array without Web Worker

The main objective is to compare the performance of sorting a significant array of random numbers (1,000,000 elements) using a Web Worker versus sorting without one.

## Running the Project Locally

To run the project on your local machine, follow these straightforward steps:

1. Clone the repository to your local environment.
2. Open the `index.html` file using any web browser.
3. Utilize the provided buttons to perform the respective actions:
   - Clicking "Sort Array with Web Worker" will initiate the array sorting process using a Web Worker.
   - Clicking "Sort Array without Web Worker" will trigger the array sorting process without utilizing a Web Worker.

## Performance Insights

Utilizing a Web Worker for sorting large arrays significantly enhances performance. With a Web Worker, the user interface remains responsive throughout the sorting process, while sorting without one may cause the UI to freeze or become unresponsive until completion.

## Challenges Encountered and Resolutions

**Challenges:**
- Grasping the effective utilization of Web Workers.
- Implementing data exchange between the main thread and the Web Worker.

**Resolutions:**
- To better understand Web Workers, I referred to the Mozilla Developer Network (MDN) documentation and various online tutorials.
- For facilitating data exchange between the main thread and the Web Worker, I employed the `postMessage` method for sending data to the Web Worker and utilized the `onmessage` event handler to receive messages from the Web Worker.

## References and Resources

- [Mozilla Developer Network (MDN) Web Workers Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- Various online tutorials and examples focusing on Web Worker utilization.
