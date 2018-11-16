/**
 * setDefaultProps component modifier
 */

export const setDefaultProps = <T, U extends Partial<T>>(defaultProps: U) => (
  component: React.ComponentType<T>,
) => {
  component.defaultProps = {
    ...((component.defaultProps as any) || {}),
    ...(defaultProps as any),
  };
  return (component as any) as React.ComponentType<
    Pick<T, Exclude<keyof T, keyof U>> &
      Pick<Partial<T>, Extract<keyof T, keyof U>>
  >;
};
