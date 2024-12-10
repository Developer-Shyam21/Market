import { createGlobalStyle } from "styled-components";
import { PrimaryColor } from "../Config/index";

const GlobalStyles = createGlobalStyle`
*::-webkit-scrollbar-track, .ant-table-content::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: rgb(231, 231, 231);
    border: 1px solid rgb(202, 202, 202);
}

*::-webkit-scrollbar-thumb, .ant-table-content::-webkit-scrollbar-thumb {
    border: 0px solid transparent;
    background-clip: content-box;
    border-radius: 10px;
    background-color: ${PrimaryColor} !important;
}
    *::-webkit-scrollbar, .ant-table-content::-webkit-scrollbar, {
    background-color: transparent;
    width: 8px !important;
    height: 8px !important;
}
 
    #root {
   
    height: 100%;
  }
    
  .card {
           
              background-color: #ffffff;
                  position: relative;
    display: flex;
    flex-direction: column;
        min-width: 0;
            word-wrap: break-word;
                box-shadow: 0px 9px 20px rgba(46, 35, 94, 0.07);
                    border-radius: 17px;
  }
                    .card-body {
 
    }
                    .card-header {
                          border-bottom: 0;
                          display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
     
    padding: 0 1rem;
        background-color: transparent;
        .card-title {
              font-weight: 500;
    font-size: 1.275rem;
    color: #3d434a;
        margin: .5rem;
    margin-left: 0;
        
        }
                .card-toolbar {
    display: flex;
    align-items: center;
    margin: .5rem 0;
    flex-wrap: wrap;
}
                    }

/* Grid Layout Styles */
.container {
  width: 100%;
  max-width: 1140px; /* Container width */
  margin: 0 auto; /* Center the container */
  padding: 0 15px; /* Container padding */
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: -15px; /* Align with padding on columns */
}

.col {
  flex: 1;
  padding: 15px; /* Padding inside columns */
}

/* Responsive Columns */
@media (min-width: 576px) {
  .col-sm-6 { flex: 0 0 50%; max-width: 50%; }
}

@media (min-width: 768px) {
  .col-md-4 { flex: 0 0 33.333%; max-width: 33.333%; }
}

@media (min-width: 992px) {
  .col-lg-3 { flex: 0 0 25%; max-width: 25%; }
}

.cursor-pointer {
    cursor: pointer;
}
/* Flexbox Container */
.flex-container {
  display: flex;
  flex-direction: row; /* Row direction, can be changed to column */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center items vertically */
  gap: 1rem; /* Gap between items */
}

/* Flex Item */
.flex-item {
  flex: 1; /* Grow to fill available space */
  padding: 1rem; /* Padding inside items */
  background-color: #f8f9fa; /* Background color for items */
}

/* Color Schemes */
.text-primary { color: #007bff; } /* Primary text color */
.text-secondary { color: #6c757d; } /* Secondary text color */
.text-success { color: #28a745; } /* Success text color */
.text-danger { color: #dc3545; } /* Danger text color */
.text-warning { color: #ffc107; } /* Warning text color */
.text-info { color: #17a2b8; } /* Info text color */

.bg-primary { background-color: #007bff; } /* Primary background color */
.bg-secondary { background-color: #6c757d; } /* Secondary background color */
.bg-success { background-color: #28a745; } /* Success background color */
.bg-danger { background-color: #dc3545; } /* Danger background color */
.bg-warning { background-color: #ffc107; } /* Warning background color */
.bg-info { background-color: #17a2b8; } /* Info background color */

/* Flexbox Container */
.d-flex {
  display: flex;
}
.d-none {
  display: none;
}

/* Flexbox Container Properties */
.justify-content-start {
  justify-content: flex-start; /* Align items to the start of the container */
}

.justify-content-end {
  justify-content: flex-end; /* Align items to the end of the container */
}

.justify-content-center {
  justify-content: center; /* Center items horizontally */
}

.justify-content-between {
  justify-content: space-between; /* Distribute items with space between */
}

.justify-content-around {
  justify-content: space-around; /* Distribute items with space around them */
}

.justify-content-evenly {
  justify-content: space-evenly; /* Distribute items with equal space around them */
}

.align-items-start {
  align-items: flex-start; /* Align items to the start of the cross axis (top) */
}

.align-items-end {
  align-items: flex-end; /* Align items to the end of the cross axis (bottom) */
}

.align-items-center {
  align-items: center; /* Center items vertically */
}

.align-items-baseline {
  align-items: baseline; /* Align items along their baseline */
}

.align-items-stretch {
  align-items: stretch; /* Stretch items to fill the container */
}

/* Align Self (individual item alignment) */
.align-self-start {
  align-self: flex-start; /* Align item to the start of the cross axis */
}

.align-self-end {
  align-self: flex-end; /* Align item to the end of the cross axis */
}

.align-self-center {
  align-self: center; /* Center item vertically */
}

.align-self-baseline {
  align-self: baseline; /* Align item along the baseline */
}

.align-self-stretch {
  align-self: stretch; /* Stretch item to fill its container */
}

/* Grid Container */
.d-grid {
  display: grid;
}

/* Grid Container Properties */
.justify-items-start {
  justify-items: start; /* Align items to the start of the grid area */
}

.justify-items-end {
  justify-items: end; /* Align items to the end of the grid area */
}

.justify-items-center {
  justify-items: center; /* Center items within their grid area */
}

.justify-items-stretch {
  justify-items: stretch; /* Stretch items to fill their grid area */
}

.align-items-start {
  align-items: start; /* Align items to the start of the grid area */
}

.align-items-end {
  align-items: end; /* Align items to the end of the grid area */
}

.align-items-center {
  align-items: center; /* Center items within their grid area */
}

.align-items-stretch {
  align-items: stretch; /* Stretch items to fill their grid area */
}

/* Justify Content (controls the alignment of the grid container as a whole) */
.justify-content-start {
  justify-content: start; /* Align grid items to the start of the grid container */
}

.justify-content-end {
  justify-content: end; /* Align grid items to the end of the grid container */
}

.justify-content-center {
  justify-content: center; /* Center grid items within the container */
}

.justify-content-between {
  justify-content: space-between; /* Distribute grid items with space between */
}

.justify-content-around {
  justify-content: space-around; /* Distribute grid items with space around them */
}

.justify-content-evenly {
  justify-content: space-evenly; /* Distribute grid items with equal space around them */
}

/* Align Content (controls the alignment of the grid container’s content) */
.align-content-start {
  align-content: start; /* Align grid content to the start of the grid container */
}

.align-content-end {
  align-content: end; /* Align grid content to the end of the grid container */
}

.align-content-center {
  align-content: center; /* Center grid content within the container */
}

.align-content-between {
  align-content: space-between; /* Distribute grid content with space between */
}

.align-content-around {
  align-content: space-around; /* Distribute grid content with space around them */
}

.align-content-evenly {
  align-content: space-evenly; /* Distribute grid content with equal space around them */
}
.iconify {
    position: relative;
    top: 1px;
}
.iconify:hover {
cursor: pointer;
  opacity: 0.6;
    transition: 0.7s;
}
.m-0 {
    margin: 0!important
}

.m-1 {
    margin: .25rem!important
}

.m-2 {
    margin: .5rem!important
}

.m-3 {
    margin: .75rem!important
}

.m-4 {
    margin: 1rem!important
}

.m-5 {
    margin: 1.25rem!important
}

.m-6 {
    margin: 1.5rem!important
}

.m-7 {
    margin: 1.75rem!important
}

.m-8 {
    margin: 2rem!important
}

.m-9 {
    margin: 2.25rem!important
}

.m-10 {
    margin: 2.5rem!important
}

.m-11 {
    margin: 2.75rem!important
}

.m-12 {
    margin: 3rem!important
}

.m-13 {
    margin: 3.25rem!important
}

.m-14 {
    margin: 3.5rem!important
}

.m-15 {
    margin: 3.75rem!important
}

.m-16 {
    margin: 4rem!important
}

.m-17 {
    margin: 4.25rem!important
}

.m-18 {
    margin: 4.5rem!important
}

.m-19 {
    margin: 4.75rem!important
}

.m-20 {
    margin: 5rem!important
}

.m-auto {
    margin: auto!important
}

.mx-0 {
    margin-right: 0!important;
    margin-left: 0!important
}

.mx-1 {
    margin-right: .25rem!important;
    margin-left: .25rem!important
}

.mx-2 {
    margin-right: .5rem!important;
    margin-left: .5rem!important
}

.mx-3 {
    margin-right: .75rem!important;
    margin-left: .75rem!important
}

.mx-4 {
    margin-right: 1rem!important;
    margin-left: 1rem!important
}

.mx-5 {
    margin-right: 1.25rem!important;
    margin-left: 1.25rem!important
}

.mx-6 {
    margin-right: 1.5rem!important;
    margin-left: 1.5rem!important
}

.mx-7 {
    margin-right: 1.75rem!important;
    margin-left: 1.75rem!important
}

.mx-8 {
    margin-right: 2rem!important;
    margin-left: 2rem!important
}

.mx-9 {
    margin-right: 2.25rem!important;
    margin-left: 2.25rem!important
}

.mx-10 {
    margin-right: 2.5rem!important;
    margin-left: 2.5rem!important
}

.mx-11 {
    margin-right: 2.75rem!important;
    margin-left: 2.75rem!important
}

.mx-12 {
    margin-right: 3rem!important;
    margin-left: 3rem!important
}

.mx-13 {
    margin-right: 3.25rem!important;
    margin-left: 3.25rem!important
}

.mx-14 {
    margin-right: 3.5rem!important;
    margin-left: 3.5rem!important
}

.mx-15 {
    margin-right: 3.75rem!important;
    margin-left: 3.75rem!important
}

.mx-16 {
    margin-right: 4rem!important;
    margin-left: 4rem!important
}

.mx-17 {
    margin-right: 4.25rem!important;
    margin-left: 4.25rem!important
}

.mx-18 {
    margin-right: 4.5rem!important;
    margin-left: 4.5rem!important
}

.mx-19 {
    margin-right: 4.75rem!important;
    margin-left: 4.75rem!important
}

.mx-20 {
    margin-right: 5rem!important;
    margin-left: 5rem!important
}

.mx-auto {
    margin-right: auto!important;
    margin-left: auto!important
}

.my-0 {
    margin-top: 0!important;
    margin-bottom: 0!important
}

.my-1 {
    margin-top: .25rem!important;
    margin-bottom: .25rem!important
}

.my-2 {
    margin-top: .5rem!important;
    margin-bottom: .5rem!important
}

.my-3 {
    margin-top: .75rem!important;
    margin-bottom: .75rem!important
}

.my-4 {
    margin-top: 1rem!important;
    margin-bottom: 1rem!important
}

.my-5 {
    margin-top: 1.25rem!important;
    margin-bottom: 1.25rem!important
}

.my-6 {
    margin-top: 1.5rem!important;
    margin-bottom: 1.5rem!important
}

.my-7 {
    margin-top: 1.75rem!important;
    margin-bottom: 1.75rem!important
}

.my-8 {
    margin-top: 2rem!important;
    margin-bottom: 2rem!important
}

.my-9 {
    margin-top: 2.25rem!important;
    margin-bottom: 2.25rem!important
}

.my-10 {
    margin-top: 2.5rem!important;
    margin-bottom: 2.5rem!important
}

.my-11 {
    margin-top: 2.75rem!important;
    margin-bottom: 2.75rem!important
}

.my-12 {
    margin-top: 3rem!important;
    margin-bottom: 3rem!important
}

.my-13 {
    margin-top: 3.25rem!important;
    margin-bottom: 3.25rem!important
}

.my-14 {
    margin-top: 3.5rem!important;
    margin-bottom: 3.5rem!important
}

.my-15 {
    margin-top: 3.75rem!important;
    margin-bottom: 3.75rem!important
}

.my-16 {
    margin-top: 4rem!important;
    margin-bottom: 4rem!important
}

.my-17 {
    margin-top: 4.25rem!important;
    margin-bottom: 4.25rem!important
}

.my-18 {
    margin-top: 4.5rem!important;
    margin-bottom: 4.5rem!important
}

.my-19 {
    margin-top: 4.75rem!important;
    margin-bottom: 4.75rem!important
}

.my-20 {
    margin-top: 5rem!important;
    margin-bottom: 5rem!important
}

.my-auto {
    margin-top: auto!important;
    margin-bottom: auto!important
}

.mt-0 {
    margin-top: 0!important
}

.mt-1 {
    margin-top: .25rem!important
}

.mt-2 {
    margin-top: .5rem!important
}

.mt-3 {
    margin-top: .75rem!important
}

.mt-4 {
    margin-top: 1rem!important
}

.mt-5 {
    margin-top: 1.25rem!important
}

.mt-6 {
    margin-top: 1.5rem!important
}

.mt-7 {
    margin-top: 1.75rem!important
}

.mt-8 {
    margin-top: 2rem!important
}

.mt-9 {
    margin-top: 2.25rem!important
}

.mt-10 {
    margin-top: 2.5rem!important
}

.mt-11 {
    margin-top: 2.75rem!important
}

.mt-12 {
    margin-top: 3rem!important
}

.mt-13 {
    margin-top: 3.25rem!important
}

.mt-14 {
    margin-top: 3.5rem!important
}

.mt-15 {
    margin-top: 3.75rem!important
}

.mt-16 {
    margin-top: 4rem!important
}

.mt-17 {
    margin-top: 4.25rem!important
}

.mt-18 {
    margin-top: 4.5rem!important
}

.mt-19 {
    margin-top: 4.75rem!important
}

.mt-20 {
    margin-top: 5rem!important
}

.mt-auto {
    margin-top: auto!important
}

.me-0 {
    margin-right: 0!important
}

.me-1 {
    margin-right: .25rem!important
}

.me-2 {
    margin-right: .5rem!important
}

.me-3 {
    margin-right: .75rem!important
}

.me-4 {
    margin-right: 1rem!important
}

.me-5 {
    margin-right: 1.25rem!important
}

.me-6 {
    margin-right: 1.5rem!important
}

.me-7 {
    margin-right: 1.75rem!important
}

.me-8 {
    margin-right: 2rem!important
}

.me-9 {
    margin-right: 2.25rem!important
}

.me-10 {
    margin-right: 2.5rem!important
}

.me-11 {
    margin-right: 2.75rem!important
}

.me-12 {
    margin-right: 3rem!important
}

.me-13 {
    margin-right: 3.25rem!important
}

.me-14 {
    margin-right: 3.5rem!important
}

.me-15 {
    margin-right: 3.75rem!important
}

.me-16 {
    margin-right: 4rem!important
}

.me-17 {
    margin-right: 4.25rem!important
}

.me-18 {
    margin-right: 4.5rem!important
}

.me-19 {
    margin-right: 4.75rem!important
}

.me-20 {
    margin-right: 5rem!important
}

.me-auto {
    margin-right: auto!important
}

.mb-0 {
    margin-bottom: 0!important
}

.mb-1 {
    margin-bottom: .25rem!important
}

.mb-2 {
    margin-bottom: .5rem!important
}

.mb-3 {
    margin-bottom: .75rem!important
}

.mb-4 {
    margin-bottom: 1rem!important
}

.mb-5 {
    margin-bottom: 1.25rem!important
}

.mb-6 {
    margin-bottom: 1.5rem!important
}

.mb-7 {
    margin-bottom: 1.75rem!important
}

.mb-8 {
    margin-bottom: 2rem!important
}

.mb-9 {
    margin-bottom: 2.25rem!important
}

.mb-10 {
    margin-bottom: 2.5rem!important
}

.mb-11 {
    margin-bottom: 2.75rem!important
}

.mb-12 {
    margin-bottom: 3rem!important
}

.mb-13 {
    margin-bottom: 3.25rem!important
}

.mb-14 {
    margin-bottom: 3.5rem!important
}

.mb-15 {
    margin-bottom: 3.75rem!important
}

.mb-16 {
    margin-bottom: 4rem!important
}

.mb-17 {
    margin-bottom: 4.25rem!important
}

.mb-18 {
    margin-bottom: 4.5rem!important
}

.mb-19 {
    margin-bottom: 4.75rem!important
}

.mb-20 {
    margin-bottom: 5rem!important
}

.mb-auto {
    margin-bottom: auto!important
}

.ms-0 {
    margin-left: 0!important
}

.ms-1 {
    margin-left: .25rem!important
}

.ms-2 {
    margin-left: .5rem!important
}

.ms-3 {
    margin-left: .75rem!important
}

.ms-4 {
    margin-left: 1rem!important
}

.ms-5 {
    margin-left: 1.25rem!important
}

.ms-6 {
    margin-left: 1.5rem!important
}

.ms-7 {
    margin-left: 1.75rem!important
}

.ms-8 {
    margin-left: 2rem!important
}

.ms-9 {
    margin-left: 2.25rem!important
}

.ms-10 {
    margin-left: 2.5rem!important
}

.ms-11 {
    margin-left: 2.75rem!important
}

.ms-12 {
    margin-left: 3rem!important
}

.ms-13 {
    margin-left: 3.25rem!important
}

.ms-14 {
    margin-left: 3.5rem!important
}

.ms-15 {
    margin-left: 3.75rem!important
}

.ms-16 {
    margin-left: 4rem!important
}

.ms-17 {
    margin-left: 4.25rem!important
}

.ms-18 {
    margin-left: 4.5rem!important
}

.ms-19 {
    margin-left: 4.75rem!important
}

.ms-20 {
    margin-left: 5rem!important
}

.ms-auto {
    margin-left: auto!important
}

.m-n1 {
    margin: -.25rem!important
}

.m-n2 {
    margin: -.5rem!important
}

.m-n3 {
    margin: -.75rem!important
}

.m-n4 {
    margin: -1rem!important
}

.m-n5 {
    margin: -1.25rem!important
}

.m-n6 {
    margin: -1.5rem!important
}

.m-n7 {
    margin: -1.75rem!important
}

.m-n8 {
    margin: -2rem!important
}

.m-n9 {
    margin: -2.25rem!important
}

.m-n10 {
    margin: -2.5rem!important
}

.m-n11 {
    margin: -2.75rem!important
}

.m-n12 {
    margin: -3rem!important
}

.m-n13 {
    margin: -3.25rem!important
}

.m-n14 {
    margin: -3.5rem!important
}

.m-n15 {
    margin: -3.75rem!important
}

.m-n16 {
    margin: -4rem!important
}

.m-n17 {
    margin: -4.25rem!important
}

.m-n18 {
    margin: -4.5rem!important
}

.m-n19 {
    margin: -4.75rem!important
}

.m-n20 {
    margin: -5rem!important
}

.mx-n1 {
    margin-right: -.25rem!important;
    margin-left: -.25rem!important
}

.mx-n2 {
    margin-right: -.5rem!important;
    margin-left: -.5rem!important
}

.mx-n3 {
    margin-right: -.75rem!important;
    margin-left: -.75rem!important
}

.mx-n4 {
    margin-right: -1rem!important;
    margin-left: -1rem!important
}

.mx-n5 {
    margin-right: -1.25rem!important;
    margin-left: -1.25rem!important
}

.mx-n6 {
    margin-right: -1.5rem!important;
    margin-left: -1.5rem!important
}

.mx-n7 {
    margin-right: -1.75rem!important;
    margin-left: -1.75rem!important
}

.mx-n8 {
    margin-right: -2rem!important;
    margin-left: -2rem!important
}

.mx-n9 {
    margin-right: -2.25rem!important;
    margin-left: -2.25rem!important
}

.mx-n10 {
    margin-right: -2.5rem!important;
    margin-left: -2.5rem!important
}

.mx-n11 {
    margin-right: -2.75rem!important;
    margin-left: -2.75rem!important
}

.mx-n12 {
    margin-right: -3rem!important;
    margin-left: -3rem!important
}

.mx-n13 {
    margin-right: -3.25rem!important;
    margin-left: -3.25rem!important
}

.mx-n14 {
    margin-right: -3.5rem!important;
    margin-left: -3.5rem!important
}

.mx-n15 {
    margin-right: -3.75rem!important;
    margin-left: -3.75rem!important
}

.mx-n16 {
    margin-right: -4rem!important;
    margin-left: -4rem!important
}

.mx-n17 {
    margin-right: -4.25rem!important;
    margin-left: -4.25rem!important
}

.mx-n18 {
    margin-right: -4.5rem!important;
    margin-left: -4.5rem!important
}

.mx-n19 {
    margin-right: -4.75rem!important;
    margin-left: -4.75rem!important
}

.mx-n20 {
    margin-right: -5rem!important;
    margin-left: -5rem!important
}

.my-n1 {
    margin-top: -.25rem!important;
    margin-bottom: -.25rem!important
}

.my-n2 {
    margin-top: -.5rem!important;
    margin-bottom: -.5rem!important
}

.my-n3 {
    margin-top: -.75rem!important;
    margin-bottom: -.75rem!important
}

.my-n4 {
    margin-top: -1rem!important;
    margin-bottom: -1rem!important
}

.my-n5 {
    margin-top: -1.25rem!important;
    margin-bottom: -1.25rem!important
}

.my-n6 {
    margin-top: -1.5rem!important;
    margin-bottom: -1.5rem!important
}

.my-n7 {
    margin-top: -1.75rem!important;
    margin-bottom: -1.75rem!important
}

.my-n8 {
    margin-top: -2rem!important;
    margin-bottom: -2rem!important
}

.my-n9 {
    margin-top: -2.25rem!important;
    margin-bottom: -2.25rem!important
}

.my-n10 {
    margin-top: -2.5rem!important;
    margin-bottom: -2.5rem!important
}

.my-n11 {
    margin-top: -2.75rem!important;
    margin-bottom: -2.75rem!important
}

.my-n12 {
    margin-top: -3rem!important;
    margin-bottom: -3rem!important
}

.my-n13 {
    margin-top: -3.25rem!important;
    margin-bottom: -3.25rem!important
}

.my-n14 {
    margin-top: -3.5rem!important;
    margin-bottom: -3.5rem!important
}

.my-n15 {
    margin-top: -3.75rem!important;
    margin-bottom: -3.75rem!important
}

.my-n16 {
    margin-top: -4rem!important;
    margin-bottom: -4rem!important
}

.my-n17 {
    margin-top: -4.25rem!important;
    margin-bottom: -4.25rem!important
}

.my-n18 {
    margin-top: -4.5rem!important;
    margin-bottom: -4.5rem!important
}

.my-n19 {
    margin-top: -4.75rem!important;
    margin-bottom: -4.75rem!important
}

.my-n20 {
    margin-top: -5rem!important;
    margin-bottom: -5rem!important
}

.mt-n1 {
    margin-top: -.25rem!important
}

.mt-n2 {
    margin-top: -.5rem!important
}

.mt-n3 {
    margin-top: -.75rem!important
}

.mt-n4 {
    margin-top: -1rem!important
}

.mt-n5 {
    margin-top: -1.25rem!important
}

.mt-n6 {
    margin-top: -1.5rem!important
}

.mt-n7 {
    margin-top: -1.75rem!important
}

.mt-n8 {
    margin-top: -2rem!important
}

.mt-n9 {
    margin-top: -2.25rem!important
}

.mt-n10 {
    margin-top: -2.5rem!important
}

.mt-n11 {
    margin-top: -2.75rem!important
}

.mt-n12 {
    margin-top: -3rem!important
}

.mt-n13 {
    margin-top: -3.25rem!important
}

.mt-n14 {
    margin-top: -3.5rem!important
}

.mt-n15 {
    margin-top: -3.75rem!important
}

.mt-n16 {
    margin-top: -4rem!important
}

.mt-n17 {
    margin-top: -4.25rem!important
}

.mt-n18 {
    margin-top: -4.5rem!important
}

.mt-n19 {
    margin-top: -4.75rem!important
}

.mt-n20 {
    margin-top: -5rem!important
}

.me-n1 {
    margin-right: -.25rem!important
}

.me-n2 {
    margin-right: -.5rem!important
}

.me-n3 {
    margin-right: -.75rem!important
}

.me-n4 {
    margin-right: -1rem!important
}

.me-n5 {
    margin-right: -1.25rem!important
}

.me-n6 {
    margin-right: -1.5rem!important
}

.me-n7 {
    margin-right: -1.75rem!important
}

.me-n8 {
    margin-right: -2rem!important
}

.me-n9 {
    margin-right: -2.25rem!important
}

.me-n10 {
    margin-right: -2.5rem!important
}

.me-n11 {
    margin-right: -2.75rem!important
}

.me-n12 {
    margin-right: -3rem!important
}

.me-n13 {
    margin-right: -3.25rem!important
}

.me-n14 {
    margin-right: -3.5rem!important
}

.me-n15 {
    margin-right: -3.75rem!important
}

.me-n16 {
    margin-right: -4rem!important
}

.me-n17 {
    margin-right: -4.25rem!important
}

.me-n18 {
    margin-right: -4.5rem!important
}

.me-n19 {
    margin-right: -4.75rem!important
}

.me-n20 {
    margin-right: -5rem!important
}

.mb-n1 {
    margin-bottom: -.25rem!important
}

.mb-n2 {
    margin-bottom: -.5rem!important
}

.mb-n3 {
    margin-bottom: -.75rem!important
}

.mb-n4 {
    margin-bottom: -1rem!important
}

.mb-n5 {
    margin-bottom: -1.25rem!important
}

.mb-n6 {
    margin-bottom: -1.5rem!important
}

.mb-n7 {
    margin-bottom: -1.75rem!important
}

.mb-n8 {
    margin-bottom: -2rem!important
}

.mb-n9 {
    margin-bottom: -2.25rem!important
}

.mb-n10 {
    margin-bottom: -2.5rem!important
}

.mb-n11 {
    margin-bottom: -2.75rem!important
}

.mb-n12 {
    margin-bottom: -3rem!important
}

.mb-n13 {
    margin-bottom: -3.25rem!important
}

.mb-n14 {
    margin-bottom: -3.5rem!important
}

.mb-n15 {
    margin-bottom: -3.75rem!important
}

.mb-n16 {
    margin-bottom: -4rem!important
}

.mb-n17 {
    margin-bottom: -4.25rem!important
}

.mb-n18 {
    margin-bottom: -4.5rem!important
}

.mb-n19 {
    margin-bottom: -4.75rem!important
}

.mb-n20 {
    margin-bottom: -5rem!important
}

.ms-n1 {
    margin-left: -.25rem!important
}

.ms-n2 {
    margin-left: -.5rem!important
}

.ms-n3 {
    margin-left: -.75rem!important
}

.ms-n4 {
    margin-left: -1rem!important
}

.ms-n5 {
    margin-left: -1.25rem!important
}

.ms-n6 {
    margin-left: -1.5rem!important
}

.ms-n7 {
    margin-left: -1.75rem!important
}

.ms-n8 {
    margin-left: -2rem!important
}

.ms-n9 {
    margin-left: -2.25rem!important
}

.ms-n10 {
    margin-left: -2.5rem!important
}

.ms-n11 {
    margin-left: -2.75rem!important
}

.ms-n12 {
    margin-left: -3rem!important
}

.ms-n13 {
    margin-left: -3.25rem!important
}

.ms-n14 {
    margin-left: -3.5rem!important
}

.ms-n15 {
    margin-left: -3.75rem!important
}

.ms-n16 {
    margin-left: -4rem!important
}

.ms-n17 {
    margin-left: -4.25rem!important
}

.ms-n18 {
    margin-left: -4.5rem!important
}

.ms-n19 {
    margin-left: -4.75rem!important
}

.ms-n20 {
    margin-left: -5rem!important
}

.p-0 {
    padding: 0!important
}

.p-1 {
    padding: .25rem!important
}

.p-2 {
    padding: .5rem!important
}

.p-3 {
    padding: .75rem!important
}

.p-4 {
    padding: 1rem!important
}

.p-5 {
    padding: 1.25rem!important
}

.p-6 {
    padding: 1.5rem!important
}

.p-7 {
    padding: 1.75rem!important
}

.p-8 {
    padding: 2rem!important
}

.p-9 {
    padding: 2.25rem!important
}

.p-10 {
    padding: 2.5rem!important
}

.p-11 {
    padding: 2.75rem!important
}

.p-12 {
    padding: 3rem!important
}

.p-13 {
    padding: 3.25rem!important
}

.p-14 {
    padding: 3.5rem!important
}

.p-15 {
    padding: 3.75rem!important
}

.p-16 {
    padding: 4rem!important
}

.p-17 {
    padding: 4.25rem!important
}

.p-18 {
    padding: 4.5rem!important
}

.p-19 {
    padding: 4.75rem!important
}

.p-20 {
    padding: 5rem!important
}

.px-0 {
    padding-right: 0!important;
    padding-left: 0!important
}

.px-1 {
    padding-right: .25rem!important;
    padding-left: .25rem!important
}

.px-2 {
    padding-right: .5rem!important;
    padding-left: .5rem!important
}

.px-3 {
    padding-right: .75rem!important;
    padding-left: .75rem!important
}

.px-4 {
    padding-right: 1rem!important;
    padding-left: 1rem!important
}

.px-5 {
    padding-right: 1.25rem!important;
    padding-left: 1.25rem!important
}

.px-6 {
    padding-right: 1.5rem!important;
    padding-left: 1.5rem!important
}

.px-7 {
    padding-right: 1.75rem!important;
    padding-left: 1.75rem!important
}

.px-8 {
    padding-right: 2rem!important;
    padding-left: 2rem!important
}

.px-9 {
    padding-right: 2.25rem!important;
    padding-left: 2.25rem!important
}

.px-10 {
    padding-right: 2.5rem!important;
    padding-left: 2.5rem!important
}

.px-11 {
    padding-right: 2.75rem!important;
    padding-left: 2.75rem!important
}

.px-12 {
    padding-right: 3rem!important;
    padding-left: 3rem!important
}

.px-13 {
    padding-right: 3.25rem!important;
    padding-left: 3.25rem!important
}

.px-14 {
    padding-right: 3.5rem!important;
    padding-left: 3.5rem!important
}

.px-15 {
    padding-right: 3.75rem!important;
    padding-left: 3.75rem!important
}

.px-16 {
    padding-right: 4rem!important;
    padding-left: 4rem!important
}

.px-17 {
    padding-right: 4.25rem!important;
    padding-left: 4.25rem!important
}

.px-18 {
    padding-right: 4.5rem!important;
    padding-left: 4.5rem!important
}

.px-19 {
    padding-right: 4.75rem!important;
    padding-left: 4.75rem!important
}

.px-20 {
    padding-right: 5rem!important;
    padding-left: 5rem!important
}

.py-0 {
    padding-top: 0!important;
    padding-bottom: 0!important
}

.py-1 {
    padding-top: .25rem!important;
    padding-bottom: .25rem!important
}

.py-2 {
    padding-top: .5rem!important;
    padding-bottom: .5rem!important
}

.py-3 {
    padding-top: .75rem!important;
    padding-bottom: .75rem!important
}

.py-4 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important
}

.py-5 {
    padding-top: 1.25rem!important;
    padding-bottom: 1.25rem!important
}

.py-6 {
    padding-top: 1.5rem!important;
    padding-bottom: 1.5rem!important
}

.py-7 {
    padding-top: 1.75rem!important;
    padding-bottom: 1.75rem!important
}

.py-8 {
    padding-top: 2rem!important;
    padding-bottom: 2rem!important
}

.py-9 {
    padding-top: 2.25rem!important;
    padding-bottom: 2.25rem!important
}

.py-10 {
    padding-top: 2.5rem!important;
    padding-bottom: 2.5rem!important
}

.py-11 {
    padding-top: 2.75rem!important;
    padding-bottom: 2.75rem!important
}

.py-12 {
    padding-top: 3rem!important;
    padding-bottom: 3rem!important
}

.py-13 {
    padding-top: 3.25rem!important;
    padding-bottom: 3.25rem!important
}

.py-14 {
    padding-top: 3.5rem!important;
    padding-bottom: 3.5rem!important
}

.py-15 {
    padding-top: 3.75rem!important;
    padding-bottom: 3.75rem!important
}

.py-16 {
    padding-top: 4rem!important;
    padding-bottom: 4rem!important
}

.py-17 {
    padding-top: 4.25rem!important;
    padding-bottom: 4.25rem!important
}

.py-18 {
    padding-top: 4.5rem!important;
    padding-bottom: 4.5rem!important
}

.py-19 {
    padding-top: 4.75rem!important;
    padding-bottom: 4.75rem!important
}

.py-20 {
    padding-top: 5rem!important;
    padding-bottom: 5rem!important
}

.pt-0 {
    padding-top: 0!important
}

.pt-1 {
    padding-top: .25rem!important
}

.pt-2 {
    padding-top: .5rem!important
}

.pt-3 {
    padding-top: .75rem!important
}

.pt-4 {
    padding-top: 1rem!important
}

.pt-5 {
    padding-top: 1.25rem!important
}

.pt-6 {
    padding-top: 1.5rem!important
}

.pt-7 {
    padding-top: 1.75rem!important
}

.pt-8 {
    padding-top: 2rem!important
}

.pt-9 {
    padding-top: 2.25rem!important
}

.pt-10 {
    padding-top: 2.5rem!important
}

.pt-11 {
    padding-top: 2.75rem!important
}

.pt-12 {
    padding-top: 3rem!important
}

.pt-13 {
    padding-top: 3.25rem!important
}

.pt-14 {
    padding-top: 3.5rem!important
}

.pt-15 {
    padding-top: 3.75rem!important
}

.pt-16 {
    padding-top: 4rem!important
}

.pt-17 {
    padding-top: 4.25rem!important
}

.pt-18 {
    padding-top: 4.5rem!important
}

.pt-19 {
    padding-top: 4.75rem!important
}

.pt-20 {
    padding-top: 5rem!important
}

.pe-0 {
    padding-right: 0!important
}

.pe-1 {
    padding-right: .25rem!important
}

.pe-2 {
    padding-right: .5rem!important
}

.pe-3 {
    padding-right: .75rem!important
}

.pe-4 {
    padding-right: 1rem!important
}

.pe-5 {
    padding-right: 1.25rem!important
}

.pe-6 {
    padding-right: 1.5rem!important
}

.pe-7 {
    padding-right: 1.75rem!important
}

.pe-8 {
    padding-right: 2rem!important
}

.pe-9 {
    padding-right: 2.25rem!important
}

.pe-10 {
    padding-right: 2.5rem!important
}

.pe-11 {
    padding-right: 2.75rem!important
}

.pe-12 {
    padding-right: 3rem!important
}

.pe-13 {
    padding-right: 3.25rem!important
}

.pe-14 {
    padding-right: 3.5rem!important
}

.pe-15 {
    padding-right: 3.75rem!important
}

.pe-16 {
    padding-right: 4rem!important
}

.pe-17 {
    padding-right: 4.25rem!important
}

.pe-18 {
    padding-right: 4.5rem!important
}

.pe-19 {
    padding-right: 4.75rem!important
}

.pe-20 {
    padding-right: 5rem!important
}

.pb-0 {
    padding-bottom: 0!important
}

.pb-1 {
    padding-bottom: .25rem!important
}

.pb-2 {
    padding-bottom: .5rem!important
}

.pb-3 {
    padding-bottom: .75rem!important
}

.pb-4 {
    padding-bottom: 1rem!important
}

.pb-5 {
    padding-bottom: 1.25rem!important
}

.pb-6 {
    padding-bottom: 1.5rem!important
}

.pb-7 {
    padding-bottom: 1.75rem!important
}

.pb-8 {
    padding-bottom: 2rem!important
}

.pb-9 {
    padding-bottom: 2.25rem!important
}

.pb-10 {
    padding-bottom: 2.5rem!important
}

.pb-11 {
    padding-bottom: 2.75rem!important
}

.pb-12 {
    padding-bottom: 3rem!important
}

.pb-13 {
    padding-bottom: 3.25rem!important
}

.pb-14 {
    padding-bottom: 3.5rem!important
}

.pb-15 {
    padding-bottom: 3.75rem!important
}

.pb-16 {
    padding-bottom: 4rem!important
}

.pb-17 {
    padding-bottom: 4.25rem!important
}

.pb-18 {
    padding-bottom: 4.5rem!important
}

.pb-19 {
    padding-bottom: 4.75rem!important
}

.pb-20 {
    padding-bottom: 5rem!important
}

.ps-0 {
    padding-left: 0!important
}

.ps-1 {
    padding-left: .25rem!important
}

.ps-2 {
    padding-left: .5rem!important
}

.ps-3 {
    padding-left: .75rem!important
}

.ps-4 {
    padding-left: 1rem!important
}

.ps-5 {
    padding-left: 1.25rem!important
}

.ps-6 {
    padding-left: 1.5rem!important
}

.ps-7 {
    padding-left: 1.75rem!important
}

.ps-8 {
    padding-left: 2rem!important
}

.ps-9 {
    padding-left: 2.25rem!important
}

.ps-10 {
    padding-left: 2.5rem!important
}

.ps-11 {
    padding-left: 2.75rem!important
}

.ps-12 {
    padding-left: 3rem!important
}

.ps-13 {
    padding-left: 3.25rem!important
}

.ps-14 {
    padding-left: 3.5rem!important
}

.ps-15 {
    padding-left: 3.75rem!important
}

.ps-16 {
    padding-left: 4rem!important
}

.ps-17 {
    padding-left: 4.25rem!important
}

.ps-18 {
    padding-left: 4.5rem!important
}

.ps-19 {
    padding-left: 4.75rem!important
}

.ps-20 {
    padding-left: 5rem!important
}
 
  
.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes bounceInUp {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 3000px, 0);
  transform: translate3d(0, 3000px, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
  }
  75% {
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
  }
  90% {
  -webkit-transform: translate3d(0, -5px, 0);
  transform: translate3d(0, -5px, 0);
  }
  100% {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  }
  }
  @keyframes bounceInUp {
  0%, 60%, 75%, 90%, 100% {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 3000px, 0);
  transform: translate3d(0, 3000px, 0);
  }
  60% {
  opacity: 1;
  -webkit-transform: translate3d(0, -20px, 0);
  transform: translate3d(0, -20px, 0);
  }
  75% {
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
  }
  90% {
  -webkit-transform: translate3d(0, -5px, 0);
  transform: translate3d(0, -5px, 0);
  }
  100% {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  }
  }


 

    .fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  } 



   .slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes slideInDown {
  0% {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  }
  }
  @keyframes slideInDown {
  0% {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  }
  } 

   .slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes slideInLeft {
  0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
  }
  @keyframes slideInLeft {
  0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
  } 



    .shimmer {
    -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300%
      100%;

    background-repeat: no-repeat;
    animation: shimmer 2.5s infinite;
  }

  @keyframes shimmer {
    100% {
      -webkit-mask-position: left;
    }
  }

 /* Bootstrap 5 Default Width Classes */

/* Fixed Width Classes */
.w-25 { width: 25% !important; }
.w-50 { width: 50% !important; }
.w-55 { width: 55% !important; }
.w-60 { width: 60% !important; }
.w-65 { width: 65% !important; }
.w-75 { width: 75% !important; }
.w-100 { width: 100% !important; }
.w-50 { width: 50px !important; }

/* Viewport Width Classes */
.vw-25 { width: 25vw !important; }
.vw-50 { width: 50vw !important; }
.vw-75 { width: 75vw !important; }
.vw-100 { width: 100vw !important; }

/* Responsive Width Classes */
.w-sm-25 { width: 25% !important; }
.w-sm-50 { width: 50% !important; }
.w-sm-75 { width: 75% !important; }
.w-sm-100 { width: 100% !important; }

.w-md-25 { width: 25% !important; }
.w-md-50 { width: 50% !important; }
.w-md-75 { width: 75% !important; }
.w-md-100 { width: 100% !important; }

.w-lg-25 { width: 25% !important; }
.w-lg-50 { width: 50% !important; }
.w-lg-75 { width: 75% !important; }
.w-lg-100 { width: 100% !important; }

.w-xl-25 { width: 25% !important; }
.w-xl-50 { width: 50% !important; }
.w-xl-75 { width: 75% !important; }
.w-xl-100 { width: 100% !important; }

/* Custom Pixel Width Classes */
.w-100px { width: 100px !important; }
.w-200px { width: 200px !important; }
.w-250px { width: 250px !important; }
.w-225px { width: 225px !important; }
.w-125px { width: 125px !important; }
.w-150px { width: 150px !important; }
.w-175px { width: 175px !important; }
.w-300px { width: 300px !important; }
.w-350px { width: 350px !important; }
.w-400px { width: 400px !important; }
.w-500px { width: 500px !important; }

/* Responsive Pixel Width Classes */
@media (min-width: 576px) {
  .w-sm-150px { width: 150px !important; }
}

@media (min-width: 768px) {
  .w-md-250px { width: 250px !important; }
}

@media (min-width: 992px) {
  .w-lg-350px { width: 350px !important; }
}

@media (min-width: 1200px) {
  .w-xl-450px { width: 450px !important; }
}



.pulse {
	animation-name: shutter-in-top;
		animation-duration: 1s;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: none;
			
		/* shorthand
		animation: shutter-in-top 1s linear 0s 1 normal none;*/
}

@keyframes shutter-in-top {
			
		0% {
			transform:rotateX(-20deg);
			transform-origin:top;
			 
		}
		100% {
			transform:rotateX(0deg);
			transform-origin:top;
			 
		}
	}
 .NameFooter {
    font-weight: 800 !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 17px !important;
  }
  .EmailFooter {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000 !important;
    font-weight: 500 !important;
    font-size: 12px !important;
  }

  div {
  font-size: 12px;
  }
  .border-remove {
    border: none !important;
  }
    .max-2 {
  display: -webkit-box;        
  -webkit-box-orient: vertical;
  overflow: hidden;       
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  width: 200px;         
}


.hover-scroll,
.hover-scroll-overlay,
.scroll {
  overflow: scroll;
  position: relative;
}

@media (max-width: 991.98px) {
  .hover-scroll,
  .hover-scroll-overlay,
  .scroll {
    overflow: auto;
  }
}

.hover-scroll-overlay-x,
.hover-scroll-x,
.scroll-x {
  overflow-x: scroll;
  position: relative;
}

@media (max-width: 991.98px) {
  .hover-scroll-overlay-x,
  .hover-scroll-x,
  .scroll-x {
    overflow-x: auto;
  }
}

.hover-scroll-overlay-y,
.hover-scroll-y,
.scroll-y {
  overflow-y: scroll;
  position: relative;
}

@media (max-width: 991.98px) {
  .hover-scroll-overlay-y,
  .hover-scroll-y,
  .scroll-y {
    overflow-y: auto;
  }
}

.hover-scroll,
.hover-scroll-overlay,
.hover-scroll-overlay-x,
.hover-scroll-overlay-y,
.hover-scroll-x,
.hover-scroll-y {
  scrollbar-color: transparent transparent;
}

.hover-scroll-overlay-x::-webkit-scrollbar-thumb,
.hover-scroll-overlay-y::-webkit-scrollbar-thumb,
.hover-scroll-overlay::-webkit-scrollbar-thumb,
.hover-scroll-x::-webkit-scrollbar-thumb,
.hover-scroll-y::-webkit-scrollbar-thumb,
.hover-scroll::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.hover-scroll-overlay-x::-webkit-scrollbar-corner,
.hover-scroll-overlay-y::-webkit-scrollbar-corner,
.hover-scroll-overlay::-webkit-scrollbar-corner,
.hover-scroll-x::-webkit-scrollbar-corner,
.hover-scroll-y::-webkit-scrollbar-corner,
.hover-scroll::-webkit-scrollbar-corner {
  background-color: transparent;
}

.hover-scroll-overlay-x:hover,
.hover-scroll-overlay-y:hover,
.hover-scroll-overlay:hover,
.hover-scroll-x:hover,
.hover-scroll-y:hover,
.hover-scroll:hover {
  scrollbar-color: var(--bs-scrollbar-color) transparent;
}

.hover-scroll-overlay-x:hover::-webkit-scrollbar-thumb,
.hover-scroll-overlay-y:hover::-webkit-scrollbar-thumb,
.hover-scroll-overlay:hover::-webkit-scrollbar-thumb,
.hover-scroll-x:hover::-webkit-scrollbar-thumb,
.hover-scroll-y:hover::-webkit-scrollbar-thumb,
.hover-scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--bs-scrollbar-color);
}

.hover-scroll-overlay-x:hover::-webkit-scrollbar-corner,
.hover-scroll-overlay-y:hover::-webkit-scrollbar-corner,
.hover-scroll-overlay:hover::-webkit-scrollbar-corner,
.hover-scroll-x:hover::-webkit-scrollbar-corner,
.hover-scroll-y:hover::-webkit-scrollbar-corner,
.hover-scroll:hover::-webkit-scrollbar-corner {
  background-color: transparent;
}

.ant-btn-link, a {
  color: ${PrimaryColor} !important;
}
   .ant-upload-drag {
    border-radius: 18px !important;
  }

 .fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 
   .fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInUp {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInUp {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 
.img-30 {
    width: 30px !important;
}
    .d-flex .flex-grow-1 {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
    .flex-grow-1 {
    flex-grow: 1 !important;
}
    .flex-grow-1 p {
    font-size: 12px;
    line-height: 1;
    color: rgba(61, 67, 74, 0.7);
}
    .font-outfit {
    font-family: "Outfit", sans-serif, sans-serif;
}
    .ant-layout-header {
            line-height: normal;
    }
  
`;

export default GlobalStyles;
