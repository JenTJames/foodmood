import { Skeleton } from "@mui/material";

const ImageCardSkeleton = () => {
  return (
    <div className="w-64 h-64 md:w-72 lg:w-96 md:h-72">
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{
          minWidth: "100%",
          minHeight: "100%",
        }}
      />
    </div>
  );
};

export default ImageCardSkeleton;
