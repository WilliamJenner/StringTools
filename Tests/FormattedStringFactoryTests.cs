using System.Collections.Generic;
using Logic;
using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Returns_Single_Expected_Formatted_String()
        {
            var exampleFormat = "public int {0} {{ get; set; }}";
            var insertedString = "TEST";
            var expectedResult = new List<string>() {"public int TEST { get; set; }"};

            var actualResult = FormattedStringFactory.FormatStrings(insertedString, exampleFormat);

            Assert.That(actualResult, Is.EquivalentTo(expectedResult));
        }

        [Test]
        public void Returns_Multiple_Expected_Formatted_Strings()
        {
            var exampleFormat = "public int {0} {{ get; set; }}";
            var insertedStrings = new List<string>() { "foo", "bar" };
            var expectedResult = new List<string>() { "public int foo { get; set; }" , "public int bar { get; set; }" };

            var actualResult = FormattedStringFactory.FormatStrings(insertedStrings, exampleFormat);

            Assert.That(actualResult, Is.EquivalentTo(expectedResult));
        }
    }
}