// Utility function to conditionally join class names
export function cn(...inputs: any[]): string {
  return inputs
    .flat(Infinity)
    .filter(Boolean)
    .join(' ');
} 