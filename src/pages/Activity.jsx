import React, { useEffect, useState } from "react";
import activities from "../Data";
import ActivityCardDisplay from "../components/ActivityCardDisplay";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const sortValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const Activity = () => {
  const [filterActivity, setFilterActivity] = useState(activities);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortParams = searchParams.get("sort");

  useEffect(() => {
    const filteredData = activities.filter((data) => {
      return data.gainPercentage >= sortParams;
    });
    setFilterActivity(filteredData);
  }, [searchParams]);

  const handleFilter = (e) => {
    const sort = e.target.value;
    setSearchParams((prevParams) => {
      prevParams.set("sort", sort);
      return prevParams;
    });
  };

  return (
    <div>
      {filterActivity.map((data, index) => (
        <ActivityCardDisplay key={index} {...data} />
      ))}
      <FormControl fullWidth>
        <InputLabel color="secondary">Sort By Gain Percentage</InputLabel>
        <Select
          color="secondary"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchParams.get("sort")}
          onChange={handleFilter}
          label="Sort By Gain Percentage"
        >
          {sortValues.map((data, index) => (
            <MenuItem value={data}>{data}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Activity;
