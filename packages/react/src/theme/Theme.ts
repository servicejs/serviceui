/**
 * Theme class module
 */

// tslint:disable:max-classes-per-file

/** Imports */

import { rem } from "../mixins";
import { ObjectFunctor } from "../util/ObjectFunctor";

/** Declarations */

export interface ColorProps {
  readonly base: string;
  readonly tint: string;
  readonly shade: string;
  readonly text: string;
  readonly textShadow: string;
}

export class Color {
  public readonly base: string;
  public readonly tint: string;
  public readonly shade: string;
  public readonly text: string;
  public readonly textShadow: string;

  constructor({ base, tint, shade, text, textShadow }: ColorProps) {
    this.base = base;
    this.tint = tint;
    this.shade = shade;
    this.text = text;
    this.textShadow = textShadow;
  }

  public background = () => {
    return {
      background: this.base,
      color: this.text,
      textShadow: `${this.textShadow} 0 0 ${0.1}rem`,
    };
  }

  public toString = () => this.base;
}

export interface ThemeProps<NamedColors extends string> {
  baseFontSize: number;
  baseLineHeight: number;
  colors: Record<NamedColors, ColorProps>;
}

export class Theme<
  P extends ThemeProps<NamedColors> = ThemeProps<NamedColors>,
  NamedColors extends string = string
> {
  public colors: Record<NamedColors, Color>;
  protected readonly props: P;

  constructor(props: P = {} as P) {
    this.props = props;
    this.colors = ObjectFunctor.of(this.props.colors)
      .mapKeyValueTransform<Record<NamedColors, Color>, Color>(
        (key: NamedColors, value: ColorProps) => new Color(value),
      )
      .flatten();
  }

  public blh = (n: number) => rem(n * this.props.baseLineHeight);
}

export interface ThemedProps<T extends Theme = Theme> {
  theme?: T;
}
