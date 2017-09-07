#
# CDDL HEADER START
#
# The contents of this file are subject to the terms of the
# Common Development and Distribution License (the "License").
# You may not use this file except in compliance with the License.
#
# You can obtain a copy of the license at usr/src/OPENSOLARIS.LICENSE
# or http://www.opensolaris.org/os/licensing.
# See the License for the specific language governing permissions
# and limitations under the License.
#
# When distributing Covered Code, include this CDDL HEADER in each
# file and include the License file at usr/src/OPENSOLARIS.LICENSE.
# If applicable, add the following below this CDDL HEADER, with the
# fields enclosed by brackets "[]" replaced with your own identifying
# information: Portions Copyright [yyyy] [name of copyright owner]
#
# CDDL HEADER END
#

#
# Copyright (c) 2011, 2017, Oracle and/or its affiliates. All rights reserved.
#

include ../../../make-rules/shared-macros.mk

COMPONENT_NAME=		NetAddr-IP
COMPONENT_VERSION=	4.079
IPS_COMPONENT_VERSION=	4.79
COMPONENT_SRC=		$(COMPONENT_NAME)-$(COMPONENT_VERSION)
COMPONENT_ARCHIVE=	$(COMPONENT_SRC).tar.gz
COMPONENT_PROJECT_URL=	http://search.cpan.org/dist/Netaddr-IP/
COMPONENT_ARCHIVE_HASH=	\
    sha256:ec5a82dfb7028bcd28bb3d569f95d87dd4166cc19867f2184ed3a59f6d6ca0e7
COMPONENT_ARCHIVE_URL=	http://search.cpan.org/CPAN/authors/id/M/MI/MIKER/$(COMPONENT_ARCHIVE)
COMPONENT_BUGDB=	perl-mod/netaddr-ip
TPNO=			9999
COMPONENT_ANITYA_ID=	

COPYRIGHT_FILE = Copying
COPYRIGHTS = GPLv2

BUILD_STYLE = makemaker
include $(WS_MAKE_RULES)/common.mk

# The component Makefile.PL file will ask some questions on whether we want
# to run external tests, to which we want to answer with "n".

REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += system/library
