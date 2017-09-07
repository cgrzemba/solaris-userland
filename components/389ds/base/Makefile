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
# Copyright (c) 2017, cgrzemba@opencsw.org
#

PATH=$(SPRO_VROOT)/bin:$(GNUBIN):$(USRBINDIR)

COMPONENT_NAME=		389-ds-base
COMPONENT_VERSION=	1.3.5.17
COMPONENT_PROJECT_URL=	http://directory.fedoraproject.org
COMPONENT_ARCHIVE_HASH= \
    sha256:522420b6decc162ed5d57ca913753b48e4bd7137fa0eb1bbc3e21e45923b1819
COMPONENT_ARCHIVE = $(COMPONENT_NAME)-$(COMPONENT_VERSION).tar.bz2
COMPONENT_ARCHIVE_URL=	http://directory.fedoraproject.org/binaries/$(COMPONENT_ARCHIVE)
COMPONENT_BUGDB=	
COMPONENT_ANITYA_ID=	

TPNO=9999

BUILD_BITS= 64
include ../../../make-rules/shared-macros.mk

include $(WS_MAKE_RULES)/common.mk

# studio_C99MODE= $(studio_C99_ENABLE)
# CPPFLAGS += "-DFALSE_SHARING_ALIGN=64"

# uses  __atomic_add_fetch_8
COMPILER = gcc

CONFIGURE_ENV +=	PYTHONPROG=$(PYTHON.$(BITS))

# CONFIGURE_OPTIONS += --with-ldapsdk-inc=$(USRINCDIR)/dirsrv 
# CONFIGURE_OPTIONS += --with-ldapsdk-lib=$(libdir)
# CONFIGURE_OPTIONS += --with-ldapsdk-bin=$(prefix)/dirsrv/bin
# CONFIGURE_OPTIONS += --with-ldapsdk-bin=$(bindir)
# CONFIGURE_OPTIONS += --with-openldap=$(prefix)
CONFIGURE_OPTIONS += --sysconfdir=/etc
CONFIGURE_OPTIONS += --localstatedir=/var
CONFIGURE_OPTIONS += --with-openldap-inc=$(USRINCDIR)/openldap
CONFIGURE_OPTIONS += --with-openldap-lib=$(USRLIBDIR)/$(MACH64)
CONFIGURE_OPTIONS += --with-openldap-bin=$(USRLIBDIR)/openldap/bin
# CONFIGURE_OPTIONS += --with-db-inc=$(prefix)/bdb48/include 
# CONFIGURE_OPTIONS += --with-db-lib=$(abspath $(prefix)/bdb48/lib/$(MM_LIBDIR))
CONFIGURE_OPTIONS += --with-sasl-inc=$(USRINCDIR)/sasl2 
CONFIGURE_OPTIONS += --with-sasl-lib=$(USRLIBDIR)/sasl2/$(MACH64)
CONFIGURE_OPTIONS += --with-nss-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nss-inc=$(USRINCDIR)/mps
CONFIGURE_OPTIONS += --with-nspr-lib=$(USRLIBDIR)/mps/$(MACH64)
CONFIGURE_OPTIONS += --with-nspr-inc=$(USRINCDIR)/mps
# to satisfy pkgsend resolve
CONFIGURE_OPTIONS += --with-pythonexec=/usr/bin/python2.7
CONFIGURE_OPTIONS += --enable-debug

COMPONENT_PRE_CONFIGURE_ACTION = \
	($(CLONEY) $(SOURCE_DIR) $(@D))
COMPONENT_PREP_ACTION = ( \
	cd $(@D); \
		libtoolize --copy --force; \
		aclocal --force; \
		autoheader --force ; \
		automake --add-missing --copy --force-missing; \
		autoconf; \
	)

COMPONENT_POST_INSTALL_ACTION = \
	( ginstall -d $(PROTOSVCMANIFESTDIR)/network ; \
	 svcbundle -o $(PROTOSVCMANIFESTDIR)/network/dirsrv.xml -s service-name=network/ds/dirsrv -s start-method=/usr/bin/start-dirsrv -s stop-method=/usr/bin/stop-dirsrv -s model=daemon -s enabled=false )

REQUIRED_PACKAGES += library/security/openssl
REQUIRED_PACKAGES += $(PERL_PKG)
REQUIRED_PACKAGES += library/icu
REQUIRED_PACKAGES += library/security/nss
REQUIRED_PACKAGES += library/nspr
REQUIRED_PACKAGES += library/svrcore
REQUIRED_PACKAGES += system/management/snmp/net-snmp
REQUIRED_PACKAGES += system/library/security/libsasl2
REQUIRED_PACKAGES += system/core-os
REQUIRED_PACKAGES += library/openldap
REQUIRED_PACKAGES += database/berkeleydb-5
REQUIRED_PACKAGES += service/security/kerberos-5
REQUIRED_PACKAGES += library/pcre
