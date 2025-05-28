// @ts-nocheck

import {
  Badge,
  Box,
  Button,
  Group,
  Stack,
  Table,
  TextInput,
} from "@mantine/core";
import { IconBook, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { TitleBadge } from "../../components";
import { reports } from "../../data/reports";

const ALL_CATEGORIES = Array.from(new Set(reports.map((r) => r.category)));
const ALL_AORS = Array.from(
  new Set(reports.map((r) => (r.AoR && r.AoR.trim() ? r.AoR : "(None)")))
);

function filterBySearch(items, search, keys) {
  const term = search.toLowerCase();
  return items.filter((item) =>
    keys.some((key) => String(item[key]).toLowerCase().includes(term))
  );
}

function filterByCategories(items, categories) {
  if (categories.length === 0) return items;
  return items.filter((item) => categories.includes(item.category));
}

function filterByAoRs(items, aors) {
  if (aors.length === 0) return items;
  return items.filter((item) => {
    const aoR = item.AoR && item.AoR.trim() ? item.AoR : "(None)";
    return aors.includes(aoR);
  });
}

export function ReportsList() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAoRs, setSelectedAoRs] = useState([]);

  let filtered = filterBySearch(reports, search, [
    "name",
    "category",
    "publishedYear",
    "AoR",
  ]);
  filtered = filterByCategories(filtered, selectedCategories);
  filtered = filterByAoRs(filtered, selectedAoRs);

  function handleCategoryToggle(category) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((c) => c !== category)
        : [...current, category]
    );
  }
  function handleAllCategoryClick() {
    setSelectedCategories([]);
  }

  function handleAoRToggle(aor) {
    setSelectedAoRs((current) =>
      current.includes(aor)
        ? current.filter((c) => c !== aor)
        : [...current, aor]
    );
  }
  function handleAllAoRClick() {
    setSelectedAoRs([]);
  }

  function handleSearchChange(e) {
    setSearch(e.currentTarget.value);
  }

  return (
    <Box style={{ marginTop: 120 }}>
      <TitleBadge color="green" title="Reports & Resources" />

      <Stack spacing="xs" mb="md">
        <Group spacing="xs">
          <Button
            color={selectedCategories.length === 0 ? "green" : "gray"}
            variant={selectedCategories.length === 0 ? "filled" : "light"}
            onClick={handleAllCategoryClick}
            size="xs"
          >
            All Categories
          </Button>
          {ALL_CATEGORIES.map((cat) => (
            <Button
              key={cat}
              color={selectedCategories.includes(cat) ? "green" : "gray"}
              variant={selectedCategories.includes(cat) ? "filled" : "light"}
              onClick={() => handleCategoryToggle(cat)}
              size="xs"
            >
              {cat}
            </Button>
          ))}
        </Group>

        <Group spacing="xs">
          <Button
            color={selectedAoRs.length === 0 ? "orange" : "gray"}
            variant={selectedAoRs.length === 0 ? "filled" : "light"}
            onClick={handleAllAoRClick}
            size="xs"
          >
            All AoRs
          </Button>
          {ALL_AORS.map((aor) => (
            <Button
              key={aor}
              color={selectedAoRs.includes(aor) ? "orange" : "gray"}
              variant={selectedAoRs.includes(aor) ? "filled" : "light"}
              onClick={() => handleAoRToggle(aor)}
              size="xs"
            >
              {aor === "(None)" ? "No AoR" : aor}
            </Button>
          ))}
        </Group>

        <TextInput
          placeholder="Search reports..."
          icon={<IconSearch size={16} />}
          value={search}
          onChange={handleSearchChange}
        />
      </Stack>

      <Box
        style={{
          maxHeight: 1000,
          overflowY: "auto",
          borderRadius: 8,
          border: "1px solid #e9ecef",
          minWidth: 0,
        }}
      >
        <Table
          highlightOnHover
          striped={false}
          withBorder
          horizontalSpacing="md"
          verticalSpacing="sm"
          style={{ tableLayout: "fixed", width: "100%" }}
        >
          <colgroup>
            <col style={{ width: "16%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "38%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>
          <thead>
            <tr style={{ background: "#2b8a3e" }}>
              <th style={{ color: "#fff", fontWeight: 700 }}>AoR</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Category</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Name</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Year</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  No reports found.
                </td>
              </tr>
            ) : (
              filtered.map((report, idx) => (
                <tr
                  key={report.link + idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#fff" : "#f1f3f5",
                  }}
                >
                  <td>
                    <Badge color="orange" variant="light" size="sm">
                      {report.AoR && report.AoR.trim() ? report.AoR : "No AoR"}
                    </Badge>
                  </td>
                  <td>
                    <Badge color="teal" variant="light" size="sm">
                      {report.category}
                    </Badge>
                  </td>
                  <td
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={report.name}
                  >
                    {report.name}
                  </td>
                  <td>
                    <Badge color="gray" variant="light" size="sm">
                      {report.publishedYear}
                    </Badge>
                  </td>
                  <td>
                    <Button
                      leftIcon={<IconBook size={16} />}
                      size="xs"
                      variant="filled"
                      color="blue"
                      component="a"
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}
