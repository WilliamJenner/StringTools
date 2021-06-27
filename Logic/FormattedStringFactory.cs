using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Logic
{
    public static class FormattedStringFactory
    {
        public static List<string> FormatStrings(string listOfStrings, string formatString)
        {
            var splitList = listOfStrings.Split(
                new[] { "\r\n", "\r", "\n" },
                StringSplitOptions.None
            );

            return FormatStrings(splitList, formatString);
        }

        public static List<string> FormatStrings(IEnumerable<string> listOfStrings, string formatString)
        {
            return listOfStrings.Select(str =>
            {
                // Remove whitespace
                str = str.Replace(" ", string.Empty);
                return String.Format(formatString, str);
            }).ToList();
        }
    }
}
