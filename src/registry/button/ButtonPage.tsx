import { ComponentWorkspace } from '../../components/ComponentWorkspace';
import { DocSection } from '../../components/DocSection';
import { Button } from './Button';
import { buttonConfig } from './config';

export function ButtonPage() {
  return (
    <ComponentWorkspace
      name={buttonConfig.name}
      description={buttonConfig.description}
      category={buttonConfig.category}
      variants={buttonConfig.variants}
      code={buttonConfig.code}
      playgroundFields={buttonConfig.playgroundFields}
      renderPreview={(variantValues, playgroundValues) => (
        <Button
          variant={variantValues.variant as 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'}
          size={variantValues.size as 'sm' | 'md' | 'lg'}
          loading={variantValues.loading as boolean}
          disabled={variantValues.disabled as boolean}
        >
          {playgroundValues.label || 'Click me'}
        </Button>
      )}
    >
      <DocSection
        installTabs={buttonConfig.installTabs}
        tailwindConfig={buttonConfig.tailwindConfig}
        accessibilityNotes={buttonConfig.accessibilityNotes}
      />
    </ComponentWorkspace>
  );
}
