import React from 'react';

const SEOSchema = ({ type, data }) => {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Lanos IT Solutions",
      "url": "https://lanos.tech",
      "logo": "https://lanos.tech/logo512.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "customer service"
      }
    },
    review: {
      "@context": "https://schema.org",
      "@type": "Review",
      ...data
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemas[type])}
    </script>
  );
};

export default SEOSchema;