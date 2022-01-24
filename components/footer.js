import Container from "@/components/container";

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t border-black py-4">
          <div className="flex flex-wrap text-md">
            <div className="flex space-x-1 mb-1 md:mb-0">
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-gray-500 focus:text-gray-500">
                Copyright © 2022 ThreeFiftyLab. All Rights Reserved
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
