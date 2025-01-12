import styled from "@emotion/styled";
import React, { forwardRef, useMemo } from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  typography?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "body1"
    | "body2";
  children: React.ReactNode;
}

const Text = forwardRef<HTMLDivElement | HTMLHeadingElement, Props>(
  ({ typography, children, ...props }, ref) => {
    const text = useMemo(() => {
      switch (typography) {
        case "h1":
          return (
            <H1 ref={ref} {...props}>
              {children}
            </H1>
          );
        case "h2":
          return (
            <H2 ref={ref} {...props}>
              {children}
            </H2>
          );
        case "h3":
          return (
            <H3 ref={ref} {...props}>
              {children}
            </H3>
          );
        case "p":
          return (
            <Paragraph ref={ref} {...props}>
              {children}
            </Paragraph>
          );
        default:
          return (
            <Paragraph ref={ref} {...props}>
              {children}
            </Paragraph>
          );
      }
    }, [typography]);

    return text;
  }
);

const H1 = styled.h1`
  font-size: 46px;
  font-weight: 800;
  line-height: 1.4;
`;

const H2 = styled.h2`
  font-size: 36px;
  font-weight: 800;
  line-height: 1.4;
`;

const H3 = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
`;

export default Text;
