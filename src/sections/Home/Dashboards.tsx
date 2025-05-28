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
import { IconLayoutDashboard, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import TitleBadge from "../../components/TitleBadge";
import { dashboards } from "../../data/dahsboards";

const ALL_CATEGORIES = Array.from(new Set(dashboards.map((d) => d.category)));

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

export function DashboardsList() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  let filtered = filterBySearch(dashboards, search, [
    "name",
    "description",
    "publishedYear",
    "category",
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
    <Box>
      <TitleBadge color="blue" title="Dashboards" />
      <Stack spacing="xs" mb="md">
        <Group spacing="xs">
          <Button
            color={selectedCategories.length === 0 ? "blue" : "gray"}
            variant={selectedCategories.length === 0 ? "filled" : "light"}
            onClick={handleAllClick}
            size="xs"
          >
            All
          </Button>
          {ALL_CATEGORIES.map((cat) => (
            <Button
              key={cat}
              color={selectedCategories.includes(cat) ? "blue" : "gray"}
              variant={selectedCategories.includes(cat) ? "filled" : "light"}
              onClick={() => handleCategoryToggle(cat)}
              size="xs"
            >
              {cat}
            </Button>
          ))}
        </Group>
        <TextInput
          placeholder="Search dashboards..."
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
            <tr
              style={{
                background: "#1864ab",
              }}
            >
              <th style={{ color: "#fff", fontWeight: 700 }}>Category</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Name</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Description</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Year</th>
              <th style={{ color: "#fff", fontWeight: 700 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  No dashboards found.
                </td>
              </tr>
            ) : (
              filtered.map((dashboard, idx) => (
                <tr
                  key={dashboard.link + idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#fff" : "#f1f3f5", // white/gray zebra
                  }}
                >
                  <td>
                    <Badge color="blue" variant="light" size="sm">
                      {dashboard.category}
                    </Badge>
                  </td>
                  <td>{dashboard.name}</td>
                  <td>{dashboard.description}</td>
                  <td>
                    <Badge color="gray" variant="light" size="sm">
                      {dashboard.publishedYear}
                    </Badge>
                  </td>
                  <td>
                    <Button
                      leftIcon={<IconLayoutDashboard size={16} />}
                      size="xs"
                      variant="filled"
                      color="blue"
                      component="a"
                      href={dashboard.link}
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
