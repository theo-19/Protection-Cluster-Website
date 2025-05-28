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

export function ReportsList() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  let filtered = filterBySearch(reports, search, [
    "name",
    "category",
    "publishedYear",
  ]);
  filtered = filterByCategories(filtered, selectedCategories);

  function handleCategoryToggle(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  function handleAllClick() {
    setSelectedCategories([]);
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
            onClick={handleAllClick}
            size="xs"
          >
            All
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
        }}
      >
        <Table
          highlightOnHover
          striped={false}
          withBorder
          horizontalSpacing="md"
          verticalSpacing="sm"
        >
          <thead>
            <tr style={{ background: "#2b8a3e" /* Mantine green[8] */ }}>
              {/* <th style={{ color: "#fff", fontWeight: 700 }}>Logo</th> */}
              <th style={{ color: "#fff", fontWeight: 700 }}>Category</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Name</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Year</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
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
                    <Badge color="teal" variant="light" size="sm">
                      {report.category}
                    </Badge>
                  </td>
                  <td>{report.name}</td>
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
                      View Document
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
