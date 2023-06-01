/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/react-in-jsx-scope */
// import { Badge } from "react-bootstrap";


// const TestimonialBadge = ({ testimonials }) => {
//   return (
//     <>
//       {testimonials.map((testimonial, index) => {
//         if (testimonial.Valuebadge > 0) {
//           return (
//             <Badge
//               key={index}
//               bg="secondary"
//               className="ms-1"
//               data-toggle="tooltip"
//               title={`${testimonial.Valuebadge} testimonial(s)`}
//             >
//               {testimonial.Valuebadge}
//             </Badge>
//           );
//         } else {
//           return null;
//         }
//       })}
//     </>
//   );
// };
  
// export default TestimonialBadge;

import { Badge } from "react-bootstrap";

function TestimonialBadge({ testimonials, testimonialIndex }) {
  const badgeValue = testimonials[testimonialIndex].Valuebadge;
  return (
    <Badge bg="secondary">{badgeValue}</Badge>
  );
}

export default TestimonialBadge;
