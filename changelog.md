# Void List Changelog

## [unreleased]

## [1.0.0] - 13-01-2022

### Added
- List
- Example usage

## [1.0.1] - 13-01-2022

### Added
- Example in the readme

## [1.0.2] - 13-01-2022

### Fixed
- Example now use index instead of the name to remove

## [1.0.3] - 25-01-2022

### Added
- Sorting function(use the internal array `[].sort()` function)
- Map function

## [1.0.6] - 25-01-2022

### Added
- Typescript Typings
- `forEach` and `filter` function.

## [1.0.7] - 27-06-2022

### Added
- `empty()` function.

### Changed
- `map` no longer call `[].map()` in the code

## [1.0.7] - 27-06-2022
### Added
- `empty()` function.

### Changed
- `map` no longer call `[].map()` in the code

## [1.0.8] - 28-06-2022

### Added
- `containAll(list)` function, Check if a list is contained in this one
- `set(index, value)` function, set the value at that index
- `indexOf(value)` function, Returns the index of the first occurrence of a value in a list, or -1 if it is not present
- `shuffle()` function, Shuffle the list using a Fisher–Yates shuffle algorithm

### Changed
- deprecated `empty` and renamed it to `isEmpty`