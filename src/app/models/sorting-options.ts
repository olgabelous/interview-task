export interface SortingOption {
    value: string; 
    label: string;
}
  
  export const SORTING_OPTIONS: SortingOption[] = [
    { value: 'download-asc', label: 'Download Speed ascending' },
    { value: 'download-desc', label: 'Download Speed descending' },
    { value: 'upload-asc', label: 'Upload Speed ascending' },
    { value: 'upload-desc', label: 'Upload Speed descending' },
    { value: 'price-asc', label: 'Price ascending' },
    { value: 'price-desc', label: 'Price descending' },
  ];