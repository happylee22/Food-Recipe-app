// Component/Skeletons/skeletons.tsx
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { ComponentProps } from "react";
import { View } from "react-native";
type FadeInProps = ComponentProps<typeof MotiView>;
const row = {
  flexDirection: "row" as const,
  gap: 16,
  marginHorizontal: -24,
  paddingLeft: 24,
  overflow: "hidden" as const,
};

export const HealthyRecipesSkeleton = () => (
  <View style={row}>
    <Skeleton.Group show>
      {[0, 1, 2].map((i) => (
        <View key={i} style={{ gap: 8 }}>
          <Skeleton colorMode="light" width={220} height={150} radius={16} />
          <Skeleton colorMode="light" width={160} height={14} />
          <Skeleton colorMode="light" width={100} height={14} />
        </View>
      ))}
    </Skeleton.Group>
  </View>
);

export const CategoriesSkeleton = () => (
  <View style={{ flexDirection: "row", gap: 10, marginVertical: 16 }}>
    <Skeleton.Group show>
      {[70, 90, 60, 80].map((w, i) => (
        <Skeleton
          key={i}
          colorMode="light"
          width={w}
          height={32}
          radius="round"
        />
      ))}
    </Skeleton.Group>
  </View>
);

export const CardsSkeleton = () => (
  <View style={row}>
    <Skeleton.Group show>
      {[0, 1, 2].map((i) => (
        <Skeleton
          key={i}
          colorMode="light"
          width={180}
          height={230}
          radius={16}
        />
      ))}
    </Skeleton.Group>
  </View>
);

// Optional: fade real content in when it replaces the skeleton
export const FadeIn = ({ children, ...rest }: FadeInProps) => (
  <MotiView
    from={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    //@ts-ignore
    transition={{ type: "timing", duration: 500 }}
    {...rest}
  >
    {children}
  </MotiView>
);
