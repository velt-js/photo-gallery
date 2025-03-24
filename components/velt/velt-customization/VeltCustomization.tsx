import { VeltCommentDialogWireframe, VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentToolWf from './VeltCommentToolWf';
import VeltCommentBubbleWf from './VeltCommentBubbleWf';
import VeltInlineCommentsSectionWf from './VeltInlineCommentsSectionWf';

const VeltCustomization = () => {
  return (
    <VeltWireframe>
      <VeltSidebarButtonWf />
      <VeltCommentToolWf />
      <VeltCommentBubbleWf />
      <VeltCommentDialogWireframe.Header veltIf='{false}' />
      <VeltInlineCommentsSectionWf />
    </VeltWireframe>
  );
};

export default VeltCustomization; 