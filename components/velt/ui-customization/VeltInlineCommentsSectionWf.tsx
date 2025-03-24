import { VeltCommentDialogWireframe, VeltInlineCommentsSectionWireframe } from '@veltdev/react';

const VeltInlineCommentsSectionWf = () => {
  return (
    <VeltInlineCommentsSectionWireframe>
          <VeltInlineCommentsSectionWireframe.Skeleton />
          <VeltInlineCommentsSectionWireframe.Panel velt-if="{commentAnnotations.length} === 0">
            <div className="flex flex-col justify-between h-full gap-2">
              {/* Show empty state if there are no comments */}
              <div className="flex flex-col items-center justify-center text-center flex-grow p-4">
                <img 
                  src="/empty_state.svg" 
                  alt="Empty state" 
                  className="w-full max-w-[180px] h-auto mb-6"
                />
                <div className="font-bold text-xl mb-2">
                  No activity
                </div>
                <div className="text-gray-500">
                  Be the first to comment
                </div>
              </div>
              <VeltInlineCommentsSectionWireframe.ComposerContainer />
            </div>
          </VeltInlineCommentsSectionWireframe.Panel>
          <VeltInlineCommentsSectionWireframe.Panel velt-if="{commentAnnotations.length} > 0">
          <VeltInlineCommentsSectionWireframe.List>
            <VeltCommentDialogWireframe />
          </VeltInlineCommentsSectionWireframe.List>
          </VeltInlineCommentsSectionWireframe.Panel>
      </VeltInlineCommentsSectionWireframe>
  );
};

export default VeltInlineCommentsSectionWf;