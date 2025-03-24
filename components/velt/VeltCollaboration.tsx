import { VeltComments } from '@veltdev/react';
import VeltInitializeUser from './VeltInitializeUser';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltCustomization from './ui-customization/VeltCustomization';
// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.

export const VeltCollaboration = () => {
  return (
    <>
      <VeltInitializeUser />
      <VeltComments
        recordings="audio"
        ghostCommentsIndicator={false}
        deleteOnBackspace={false}
        popoverMode={true}
        commentPinHighlighter={false}
        dialogOnHover={false}
        popoverTriangleComponent={false}
        textMode={false}
        enterKeyToSubmit={true}
        shadowDom={false}
        resolveButton={false}
      />
      <VeltInitializeDocument />
      <VeltCustomization />
    </>
  );
};
