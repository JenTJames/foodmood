import { Skeleton } from "@mui/material";

const ItemCardSkeleton = () => {
  return (
    <div className="flex bg-slate-200 flex-col gap-1 p-2 rounded-lg border w-64 flex-shrink-0 lg:w-96 lg:flex-shrink justify-between">
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{
          minWidth: "100%",
          height: "100%",
        }}
      />
      <Skeleton
        animation="wave"
        variant="text"
        sx={{ fontSize: "3rem", maxWidth: "65%" }}
      />
      <Skeleton animation="wave" variant="text" sx={{ fontSize: "4rem" }} />
    </div>
  );
};

export default ItemCardSkeleton;
