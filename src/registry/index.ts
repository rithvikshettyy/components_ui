import { buttonConfig } from './button/config';

export interface ComponentEntry {
  slug: string;
  name: string;
  category: string;
  config: typeof buttonConfig;
}

export const componentRegistry: Record<string, ComponentEntry> = {
  button: {
    slug: 'button',
    name: buttonConfig.name,
    category: buttonConfig.category,
    config: buttonConfig,
  },
};

export const componentList = Object.values(componentRegistry);
