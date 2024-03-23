export type Widget = {
  id: number;
  type: WidgetTypeEnum;
  amount: number;
  active: boolean;
  linked: boolean;
  action: WidgetActionEnum;
  selectedColor: WidgetSelectedColorEnum;
}

export enum WidgetTypeEnum {
  carbon = 'carbon',
  plasticBottles = 'plastic bottles',
  trees = 'trees'
}

export enum WidgetActionEnum {
  collects = 'collects',
  plants = 'plants',
  offsets = 'offsets',
}

export enum WidgetSelectedColorEnum {
  white = 'white',
  black = 'black',
  blue = 'blue',
  green = 'green',
  beige = 'beige'
}