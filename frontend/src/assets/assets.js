// Importing various image assets to be used in the app
import appointment_img from './appointment_img.png';    // Image for appointment
import header_img from './header_img.png';              // Header image for the website
import group_profiles from './group_profiles.png';      // Image for group profiles
import profile_pic from './profile_pic.png';            // Default profile picture
import contact_image from './contact_image.png';        // Contact image for communication
import about_image from './about_image.png';            // About section image
import logo from './logo.svg';                          // Logo of the website
import dropdown_icon from './dropdown_icon.svg';        // Dropdown menu icon
import menu_icon from './menu_icon.svg';                // Menu icon for navigation
import cross_icon from './cross_icon.png';              // Icon for closing (e.g., in modals)
import chats_icon from './chats_icon.svg';              // Icon for chats/messages
import verified_icon from './verified_icon.svg';        // Icon indicating verification (e.g., for doctors)
import arrow_icon from './arrow_icon.svg';              // Arrow icon for navigation or expanding
import info_icon from './info_icon.svg';                // Information icon for additional details
import upload_icon from './upload_icon.png';            // Icon for file uploads
import stripe_logo from './stripe_logo.png';            // Stripe payment integration logo
import razorpay_logo from './razorpay_logo.png';        // Razorpay payment integration logo
import doc1 from './doc1.png';                          // Doctor 1 image
import doc2 from './doc2.png';                          // Doctor 2 image
import doc3 from './doc3.png';                          // Doctor 3 image
import doc4 from './doc4.png';                          // Doctor 4 image
import doc5 from './doc5.png';                          // Doctor 5 image
import doc6 from './doc6.png';                          // Doctor 6 image
import doc7 from './doc7.png';                          // Doctor 7 image
import doc8 from './doc8.png';                          // Doctor 8 image
import doc9 from './doc9.png';                          // Doctor 9 image
import doc10 from './doc10.png';                        // Doctor 10 image
import doc11 from './doc11.png';                        // Doctor 11 image
import doc12 from './doc12.png';                        // Doctor 12 image
import doc13 from './doc13.png';                        // Doctor 13 image
import doc14 from './doc14.png';                        // Doctor 14 image
import doc15 from './doc15.png';                        // Doctor 15 image
import Dermatologist from './Dermatologist.svg';        // Dermatologist speciality icon
import Gastroenterologist from './Gastroenterologist.svg'; // Gastroenterologist speciality icon
import General_physician from './General_physician.svg'; // General physician speciality icon
import Gynecologist from './Gynecologist.svg';          // Gynecologist speciality icon
import Neurologist from './Neurologist.svg';            // Neurologist speciality icon
import Pediatricians from './Pediatricians.svg';        // Pediatricians speciality icon

// Exporting all the images as an object, which makes them easy to import in other parts of the app
export const assets = {
    appointment_img,        // Appointment related image
    header_img,             // Header section image
    group_profiles,         // Group profile image
    logo,                   // Website logo
    chats_icon,             // Chat icon
    verified_icon,          // Verified icon for credentials
    info_icon,              // Info icon for additional details
    profile_pic,            // Default profile picture
    arrow_icon,             // Arrow icon for navigation
    contact_image,          // Contact image
    about_image,            // About section image
    menu_icon,              // Menu icon for navigation
    cross_icon,             // Cross icon for closing actions
    dropdown_icon,          // Dropdown menu icon
    upload_icon,            // Upload icon
    stripe_logo,            // Stripe logo for payments
    razorpay_logo           // Razorpay logo for payments
}

// Array holding specialities with corresponding images
export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician // Image for General physician speciality
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist // Image for Gynecologist speciality
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist // Image for Dermatologist speciality
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians // Image for Pediatricians speciality
    },
    {
        speciality: 'Neurologist',
        image: Neurologist // Image for Neurologist speciality
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist // Image for Gastroenterologist speciality
    },
]